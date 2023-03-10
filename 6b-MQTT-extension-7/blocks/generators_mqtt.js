Blockly.Python['mqtt_connect'] = function(block) {
  var value_host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
  var value_port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
  var value_client_id = Blockly.Python.valueToCode(block, 'client_id', Blockly.Python.ORDER_ATOMIC);
  var value_username = Blockly.Python.valueToCode(block, 'username', Blockly.Python.ORDER_ATOMIC) || 'None';
  var value_password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC) || 'None';

  Blockly.Python.definitions_['from_umqttsimple_import_mqttclient'] = 'from umqttsimple import MQTTClient';
  
  var code = `client = MQTTClient(${value_client_id}, ${value_host}, ${value_port}, ${value_username}, ${value_password})\n`;
  return code;
};

Blockly.Python['mqtt_publish'] = function(block) {
  var text_topic = block.getFieldValue('topic');
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = `client.publish("${text_topic}", ${value_value})\n`;
  return code;
};

Blockly.Python['mqtt_host_ip'] = function(block) {
  var dropdown_ip_add = block.getFieldValue('ip_add');
  var code =  `'${dropdown_ip_add}'`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mqtt_on_receive'] = function(block) {
  var statements_callback = Blockly.Python.statementToCode(block, 'callback');
  var functionName = Blockly.Python.provideFunction_(
    'mqtt_sub_cb',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(topic, msg):',
    statements_callback || Blockly.Python.PASS]);

  var code = `client.set_callback(${functionName})\n`;
  return code;
};

Blockly.Python['mqtt_connect_broker'] = function(block) {
  var code = 'client.connect(False) # 連線時採用 False 不清除會談資料\n';
  return code;
};
Blockly.Python['mqtt_subscribe'] = function(block) {
  var text_topic = block.getFieldValue('topic');

  var code = `client.subscribe(b'${text_topic}')\n`;
  return code;
};

Blockly.Python['mqtt_get_topic'] = function(block) {
  var code = 'topic';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mqtt_get_number'] = function(block) {
  var code = 'float(msg)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mqtt_get_text'] = function(block) {
  var code = 'msg';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['machine_id'] = function(block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
  var code = 'ubinascii.hexlify(machine.unique_id()).decode()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mqtt_check_msg'] = function(block) {
  var code = 'client.check_msg();client.ping()\n';
  return code;
};

function tryFunction() {
  
  return Blockly.Python.provideFunction_(
    'try_check_msg',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
    '  try:',
    '    client.check_msg()',
   // '    sleep(1)',
    '  except OSError as e:',
    '    client.disconnect()',
    '    print("reconnecting...")',
    '    client.connect(False) # 重新連線時也採用 False 不清除會談資料',
    '    print("reconected.")'
  ]);
}


Blockly.Python['mqtt_try_check_msg'] = function(block) {
  Blockly.Python.definitions_['from_time_import_sleep'] = 'from time import sleep';
  var code = `${tryFunction()}()\n`;
  return code;
};

