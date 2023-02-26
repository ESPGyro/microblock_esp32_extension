var title11='nullfont';
var title24='nullfont';

Blockly.Python['oled_big5_font11'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';
  title11= block.getFieldValue('title11');
  var code = `OLED.title11='${title11}'\n`;
  return code;
};

Blockly.Python['oled_big5_font24'] = function(block) {
  title24= block.getFieldValue('title24');
  var code = `OLED.title24='${title24}'\n`;
  return code;
};

Blockly.Python['del_font_11_24'] = function(block) {
  Blockly.Python.definitions_['import_os'] = 'import os';
  var code = `os.remove('${title11}'+'.py'); os.remove('${title24}'+'.py')\n`;
  return code;
};

Blockly.Python['oled_init'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';

  var dropdown_size = block.getFieldValue('size');

  var code = `oled = OLED.SSD1306_I2C(128, ${+dropdown_size == 0 ? 64 : 32})\n`;
  return code;
};


Blockly.Python['oled_soft_init'] = function(block) {
  Blockly.Python.definitions_['from machine import Pin, I2C'] = 'from machine import Pin, I2C';
  Blockly.Python.definitions_['import_oled'] = 'import OLED';

  var dropdown_size = block.getFieldValue('size');
  var value_scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
  var value_sda = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);
  //var code = `OLED.SSD1306_I2C.i2c= I2C(0, scl=Pin(${value_scl}), sda=Pin(${value_sda}), freq=100000); oled = OLED.SSD1306_I2C(128, ${+dropdown_size == 0 ? 64 : 32},i2c=i2c1)\n`;
  var code = `i2c1= I2C(0, scl=Pin(${value_scl}), sda=Pin(${value_sda}), freq=100000); oled = OLED.SSD1306_I2C(128, ${+dropdown_size == 0 ? 64 : 32},i2c=i2c1)\n`;
  return code;
};


//add for rotation
Blockly.Python['oled_rotate'] = function(block) {
  var value_rotate_dir = Blockly.Python.valueToCode(block, 'rotate_dir', Blockly.Python.ORDER_ATOMIC);
  var code = `oled.rotate_s(${value_rotate_dir})\n`;
  return code;
};

Blockly.Python['oled_draw_text'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';
  
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var code = `oled.text(${value_text}, ${value_x}, ${value_y})\n`;
  return code;
};

Blockly.Python['oled_draw_big5_text_size'] = function(block) {
  Blockly.Python.definitions_['from_framebuf_import_FrameBuffer_MONO_VLSB'] = 'from framebuf import FrameBuffer, MONO_VLSB';
  Blockly.Python.definitions_['import_font11'] = 'import '+title11;
  Blockly.Python.definitions_['import_font24'] = 'import '+title24;
  //Blockly.Python.definitions_['from_my_font32_import_words_as_words36'] = 'from my_font36 import words as words36';
  var value_text_b = Blockly.Python.valueToCode(block, 'text_b', Blockly.Python.ORDER_ATOMIC);
  var value_x_b = Blockly.Python.valueToCode(block, 'x_b', Blockly.Python.ORDER_ATOMIC);
  var value_y_b = Blockly.Python.valueToCode(block, 'y_b', Blockly.Python.ORDER_ATOMIC);
  var value_size = Blockly.Python.valueToCode(block, 'size', Blockly.Python.ORDER_ATOMIC);
  var value_invert=(block.getFieldValue('invert')=='TRUE'? 'True' : 'False');

  var code = `OLED.write_font(oled,${value_text_b}, ${value_x_b}, ${value_y_b},${value_size},${value_invert})\n`;
  return code;
};

Blockly.Python['oled_draw_big_num'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';
  Blockly.Python.definitions_['import_digifaw24'] = 'import digifaw24';
  Blockly.Python.definitions_['import_writer'] = 'import writer';
  
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'font_writer = writer.Writer(oled, digifaw24) \n' +
             'font_writer.set_textpos('+value_x+','+ value_y+') \n' +
             'font_writer.printstring(' +value_text+ ')\n';


 // var code = `dsp = bigSymbol.Symbol(oled); dsp.text(${value_text}, ${value_x}, ${value_y}); oled.show()\n`;
  return code;
};

Blockly.Python['oled_draw_png'] = function(block) {
   Blockly.Python.definitions_['import_framebuf'] = 'import framebuf';

  var bitmap = block.getFieldValue('image');
  var bitmap_image=bitmap.substring(8);
  var value_w=parseInt(bitmap.substring(2,4),16);
  var value_h =parseInt(bitmap.substring(6,8),16);
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  
 // var code = `fbuf=framebuf.FrameBuffer(bytearray(b"${bitmap_image}"),${value_w},${value_h}, framebuf.MONO_HLSB); oled.framebuf.blit(fbuf, ${value_x}, ${value_y}); oled.show(); del fbuf\n`;
  var code = `fbuf=framebuf.FrameBuffer(bytearray(b"${bitmap_image}"),${value_w},${value_h}, framebuf.MONO_HLSB); oled.framebuf.blit(fbuf, ${value_x}, ${value_y});  del fbuf\n`;
  return code;
};

Blockly.Python['oled_draw_line'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';

  var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);

  var code = `oled.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2}, 1)\n`;
  return code;
};

Blockly.Python['oled_draw_rect'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import OLED';

  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  var dropdown_fill = block.getFieldValue('fill');

  var code = `oled.${(+dropdown_fill) ? 'fill_rect' : 'rect'}(${value_x}, ${value_y}, ${value_width}, ${value_height}, 1)\n`;
  return code;
};

Blockly.Python['oled_fill'] = function(block) {
  var code = 'oled.fill(1)\n';
  return code;
};

Blockly.Python['oled_clear'] = function(block) {
  var code = 'oled.fill(0)\n';			    											 							 
  return code;
};

Blockly.Python['oled_show'] = function(block) {
  var code = 'oled.show()\n';
  return code;
};

Blockly.Python['oled_scroll'] = function(block) {
  
  var dropdown_value = block.getFieldValue('value');

  var code = `oled.roll_screen(${dropdown_value})\n`;
  return code;
};


Blockly.Python['oled_QR_text'] = function(block) {
 Blockly.Python.definitions_['import_adafruit_miniqr'] = 'import adafruit_miniqr';
 Blockly.Python.definitions_['from gui import UI'] = 'from gui import UI';
 var value_text_qr = Blockly.Python.valueToCode(block, 'qr_text', Blockly.Python.ORDER_ATOMIC);
 var value_s_qr = Blockly.Python.valueToCode(block, 'qr_s', Blockly.Python.ORDER_ATOMIC);
 var value_x_qr = Blockly.Python.valueToCode(block, 'qr_x', Blockly.Python.ORDER_ATOMIC);
 var value_y_qr = Blockly.Python.valueToCode(block, 'qr_y', Blockly.Python.ORDER_ATOMIC);
 var code = `ui=UI(oled); ui.qr_code(${value_text_qr}, ${value_x_qr}, ${value_y_qr} ,${value_s_qr}); oled.show()\n`;
 return code;
};

