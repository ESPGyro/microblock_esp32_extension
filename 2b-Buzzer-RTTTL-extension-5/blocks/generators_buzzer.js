/*
Blockly.Python['tone1'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var code = `PWM(Pin(${value_pin}), freq=${value_freq}, duty=50); sleep(${value_time}); PWM(Pin(${value_pin}), freq=${value_freq}, duty=0)\n`;
  return code;
};

Blockly.Python['tone2'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var code = `PWM(Pin(${value_pin}), freq=${value_freq}, duty=50)\n`;
  return code;
};

Blockly.Python['no_tone'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var code = `PWM(Pin(${value_pin}), freq=1000, duty=0)\n`;
  return code;
};
*/

function buzzerWriteFunction() {
  let board = boards.find(board => board.id === boardId);

  const _duty = board?.chip === "RP2" ? "duty_u16" : "duty";
  const _max_duty = board?.chip === "RP2" ? "65535" : "1023";

  return Blockly.Python.provideFunction_(
    'buzzerWrite',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin, freq=1000, duty=50, stop=0):',
    '  pwm = PWM (Pin (pin))',
    '  pwm.freq(freq)',
    '  pwm.' + _duty + '(int(duty / 100 * ' + _max_duty + '))',
    '  if stop > 0:',
    '    sleep(stop)',
    '    pwm.' + _duty + '(0)'
  ]);
}

Blockly.Python['tone1'] = function(block) {
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var code = `${buzzerWriteFunction()}(${value_pin}, freq=${value_freq}, stop=${value_time})\n`;
  return code;
};

Blockly.Python['tone2'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var code = `${buzzerWriteFunction()}(${value_pin}, freq=${value_freq})\n`;
  return code;
};

Blockly.Python['tone3'] = function(block) {
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var dropdown_valueindex = block.getFieldValue('valueIndex');

  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var code = `${buzzerWriteFunction()}(${value_pin}, freq=${dropdown_valueindex}, stop=${value_time})\n`;
  return code;
};

Blockly.Python['no_tone'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';

  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var code = `${buzzerWriteFunction()}(${value_pin}, duty=0)\n`;
  return code;
};

Blockly.Python['play_rtttl'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from rtttl_new_import_play'] = 'from rtttl_new import play';
  Blockly.Python.definitions_['import_time'] = 'import time';

  var value_pin =Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var text_song =Blockly.Python.valueToCode(block, 'song', Blockly.Python.ORDER_ATOMIC);;
  var code = `play(${value_pin},${text_song})\n`;
  return code;
};

Blockly.Python['play_song'] = function(block) {
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['from_machine_import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['from rtttl_new_import_play'] = 'from rtttl_new import play';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['from_songs_import_playsong'] = 'from songs import playsong';
 
  var value_pin =Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var text_song =block.getFieldValue('songname');
  var code = `playsong(${value_pin},'${text_song}')\n`;
  return code;
};

