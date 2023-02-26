#modified from https://raw.githubusercontent.com/RuiSantosdotme/Random-Nerd-Tutorials/master/Projects/ESP-MicroPython/esp32_esp8266_ws2812b.py
from machine import Pin
import machine, neopixel, time

# FUNCTIONS FOR LIGHTING EFFECTS
#https://randomnerdtutorials.com/micropython-ws2812b-addressable-rgb-leds-neopixel-esp32-esp8266
# bounce
def bounce(np,r, g, b, wait):
  for i in range(2 * np.n):
    for j in range(np.n):
      np[j] = (r, g, b)
    if (i // np.n) % 2 == 0:
      np[i % np.n] = (0, 0, 0)
    else:
      np[np.n - 1 - (i % np.n)] = (0, 0, 0)
    np.write()
    time.sleep_ms(wait)

# cycle
def cycle(np,r, g, b, wait):
  for i in range(np.n):
    for j in range(np.n):
      np[j] = (0, 0, 0)
    np[i % np.n] = (r, g, b)
    np.write()
    time.sleep_ms(wait)

# function to go through all colors 
def wheel(np,pos):
  # Input a value 0 to 255 to get a color value.
  # The colours are a transition r - g - b - back to r.
  '''
  if pos < 0 or pos > 255:
    return (0, 0, 0)
  if pos < 85:
    return (255 - pos * 3, pos * 3, 0)
  if pos < 170:
    pos -= 85
    return (0, 255 - pos * 3, pos * 3)
  pos -= 170
  return (pos * 3, 0, 255 - pos * 3)
  '''
  if pos < 0 or pos > 255:
    return (0, 0, 0)
  if pos < 85:
    return (int((255-pos * 3) * np.bright / 100),int((pos * 3) * np.bright / 100), 0)
  if pos < 170:
    pos -= 85
    return (0, int((255-pos * 3) * np.bright / 100),int((pos * 3) * np.bright / 100))
  pos -= 170
  return (int((pos * 3) * np.bright / 100), 0, int((255-pos * 3) * np.bright / 100))
  
  
# rainbow 
def rainbow_cycle(np,wait):
  for j in range(255):
    for i in range(np.n):
      rc_index = (i * 256 // np.n) + j
      np[i] = wheel(np,255 & rc_index)
    np.write()
    time.sleep_ms(wait)
