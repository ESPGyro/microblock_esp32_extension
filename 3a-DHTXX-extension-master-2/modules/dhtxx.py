import time
from machine import Pin, disable_irq, enable_irq

class DHTResult:
    'DHT sensor result returned by DHT.read() method'

    ERR_NO_ERROR = 0
    ERR_MISSING_DATA = 1
    ERR_CRC = 2

    error_code = ERR_NO_ERROR
    temperature = -1
    humidity = -1

    def __init__(self, error_code, temperature, humidity):
        self.error_code = error_code
        self.temperature = temperature
        self.humidity = humidity

    def is_valid(self):
        return self.error_code == DHTResult.ERR_NO_ERROR


class DHT:
    'DHT sensor (dht11, dht21,dht22) reader class for Pycom'

    __dhttype = 0

    def __init__(self, pin, sensor=0):
        self.__pin_obj = Pin(pin, mode=Pin.OPEN_DRAIN)
#        self.__pin_obj = Pin(pin, mode=Pin.OUT)
        self.__pin = pin
        self.__dhttype = sensor
        self.__pin_obj(1)
        time.sleep(1.0)
        self.buffer = bytearray(1024)

    @micropython.native
    def pulses_get(self, pin):
        # start the reading
        pin(0)
        time.sleep_ms(20)

        state = disable_irq()
        pin(1)
        for _ in range(1024):
            self.buffer[_] = pin()
        enable_irq(state)

    def read(self):
#        time.sleep_us(28)
        self.pulses_get(self.__pin_obj)
        state = self.buffer[0]
        pos = 0
        bits1 = []
        for _ in range(1024):
            if state != self.buffer[_]:
                bl = _ - pos
                if state == 1 and 2 <= bl < 7:
                        bits1.append(0)
                if state == 1 and 8 <= bl <= 15:
                        bits1.append(1)
                pos = _
                state = self.buffer[_]
#        bits = bits1[:40]
        bits = bits1[1:]

        if len(bits) != 40:
            print(len(bits))
#            print(bits)
            return DHTResult(DHTResult.ERR_MISSING_DATA, 0, 0)
        # we have the bits, calculate bytes
        the_bytes = self.__bits_to_bytes(bits)
        # calculate checksum and check
        checksum = self.__calculate_checksum(the_bytes)
        if the_bytes[4] != checksum:
            return DHTResult(DHTResult.ERR_CRC, 0, 0,0)
       # ok, we have valid data, return it
        [int_rh, dec_rh, int_t, dec_t, csum] = the_bytes
        if self.__dhttype == 0:         # dht11
            rh = int_rh                 # dht11 20% ~ 90%
            t = int_t   # dht11 0..50°C
        else:           # dht21,dht22
            rh = ((int_rh * 256) + dec_rh)/10
            t = (((int_t & 0x7F) * 256) + dec_t)/10
            if (int_t & 0x80) != 0:
                t = -t
        return DHTResult(DHTResult.ERR_NO_ERROR, t, rh)

    def __bits_to_bytes(self, bits):
        the_bytes = []
        byte = 0

        for i in range(0, len(bits)):
            byte <<= 1
            if (bits[i]):
                byte |= 1
            if ((i % 8) == 7):
                the_bytes.append(byte)
                byte = 0
        return the_bytes

    def __calculate_checksum(self, the_bytes):
        return (the_bytes[0] + the_bytes[1] + the_bytes[2] + the_bytes[3]) & 255

'''
th = DHT(14, 0)

def run():
    time.sleep(0.5)
    result = th.read()
    if result.is_valid():
        print("Humidity: %.1f %%" % result.humidity)
        print("Temperature: %.1f C" % result.temperature)
 #       print("Dew Point: %.1f C" % result.dew_point)
    else:
        print("error")

while True:
    run()
    time.sleep(1)
'''