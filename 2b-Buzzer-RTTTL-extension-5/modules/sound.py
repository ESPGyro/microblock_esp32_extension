from machine import Pin
from machine import PWM

def alarmClockBeep(pin):
   pwm=PWM(Pin(pin))
   for i in range(1,5):        #4 次迴圈 (1~4)
       pwm.freq(1000)       #設定頻率為 1KHz
       pwm.duty(512)         #設定工作週期為 50%
       time.sleep_ms(100)  #持續時間 0.1 秒
       pwm.duty(0)            #停止發聲
       time.sleep_ms(200)   #持續時間 0.2 秒
   time.sleep_ms(800)


def ringTone(pin):
   pwm=PWM(Pin(pin))
   for i in range(1,11):         #10 次迴圈 (1~10)
       pwm.freq(1000)          #設定頻率為 1KHz
       pwm.duty(512)           #設定工作週期為 50%
       time.sleep_ms(50)      #持續時間 50 毫秒
       pwm.freq(500)            #設定頻率為 500Hz
       time.sleep_ms(50)      #持續時間 50 毫秒
   pwm.duty(0)                   #停止發聲
   time.sleep(2)                   #持續時間 2 秒

def ambulenceSiren(pin):
    pwm=PWM(Pin(pin))
    for i in range(3):
     pwm.freq(400)
     pwm.duty(512)
     time.sleep_ms(500)
     pwm.freq(800)
     time.sleep_ms(500)
     pwm.duty(0)


    

