Blockly.Python['http_get'] = function(block) {
  Blockly.Python.definitions_['import_urequests'] = 'import prequests';
  var value_get_url = Blockly.Python.valueToCode(block, 'get_url', Blockly.Python.ORDER_ATOMIC);
  var code = `http_response = prequests.get(${value_get_url})\n`;
  return code;
};

Blockly.Python['openweather_connect'] = function(block) {
  Blockly.Python.definitions_['import_urequests'] = 'import prequests';
  var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
  var value_city = Blockly.Python.valueToCode(block, 'city', Blockly.Python.ORDER_ATOMIC);
  var value_api_key = Blockly.Python.valueToCode(block, 'api_key', Blockly.Python.ORDER_ATOMIC);
//  var value_username = Blockly.Python.valueToCode(block, 'username', Blockly.Python.ORDER_ATOMIC) || 'None';
//  var value_password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC) || 'None';

  var functionName = Blockly.Python.provideFunction_(
    'openweather_url',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(url, city, api_key=""):',
    '  s = url+ \'?q=\' + city + \'&appid=\' + api_key + \'&units=metric\'',
    '  return s']);

  var full_url = (value_url) + '?q=' + value_city + '&appid=' + value_api_key + '&units=metric';

 // Blockly.Python.definitions_['from_umqttsimple_import_mqttclient'] = 'from umqttsimple import MQTTClient';
  
 // var code = `http_response = prequests.get("${value_url}"+?q=${value_city}&appid=${value_api_key}&units=metric)\n`;
  var code = `http_response = prequests.get(openweather_url(${value_url},${value_city},${value_api_key}))\n`;
   return code;
};

Blockly.Python['ubidots_post'] = function(block) {
  Blockly.Python.definitions_['import_urequests'] = 'import prequests';
  var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
  var value_token = Blockly.Python.valueToCode(block, 'token', Blockly.Python.ORDER_ATOMIC);
  var value_label = Blockly.Python.valueToCode(block, 'label', Blockly.Python.ORDER_ATOMIC);
  var value_var1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_var2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var value_var3 = Blockly.Python.valueToCode(block, 'var3', Blockly.Python.ORDER_ATOMIC);
  var value_value3 = Blockly.Python.valueToCode(block, 'value3', Blockly.Python.ORDER_ATOMIC);

  var functionName = Blockly.Python.provideFunction_(
    'ubidots_url',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(url, label, token, var1, value1, var2, value2, var3, value3):',
    '  headers = {"X-Auth-Token":token}',
	'  u_url=url+label',
	// '{ "name":"John", "age":30, "city":"New York"}'
   // '  u_url=\'{}{}\'.format(url,label)',
	'  data_json = {',
    '     var1:value1,',   
	'     var2:value2,',
	'     var3:value3',
	'     }',
    '  res = prequests.post(u_url,json = data_json,headers = headers)',
    '  if(res.status_code == 200):',
    '      print("Success!!")',
    '  else:',
    '      print("Fail!!")',
    '      print("Error code：",res.status_code)',
    '  res.close()']);

  var code = `http_response = ubidots_url(${value_url},${value_label},${value_token},${value_var1},${value_value1},${value_var2},${value_value2},${value_var3},${value_value3})\n`;
   return code;
};

Blockly.Python['thingspeak_write'] = function(block) {
  Blockly.Python.definitions_['import_urequests'] = 'import prequests';
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  var value_field1 = Blockly.Python.valueToCode(block, 'field1', Blockly.Python.ORDER_ATOMIC);
  var value_field2 = Blockly.Python.valueToCode(block, 'field2', Blockly.Python.ORDER_ATOMIC);
  var value_field3 = Blockly.Python.valueToCode(block, 'field3', Blockly.Python.ORDER_ATOMIC);
  var value_field4 = Blockly.Python.valueToCode(block, 'field4', Blockly.Python.ORDER_ATOMIC);
  var value_field5 = Blockly.Python.valueToCode(block, 'field5', Blockly.Python.ORDER_ATOMIC);
  var value_field6 = Blockly.Python.valueToCode(block, 'field6', Blockly.Python.ORDER_ATOMIC);
  var value_field7 = Blockly.Python.valueToCode(block, 'field7', Blockly.Python.ORDER_ATOMIC);
  var value_field8 = Blockly.Python.valueToCode(block, 'field8', Blockly.Python.ORDER_ATOMIC);
  
  var functionName = Blockly.Python.provideFunction_(
    'thinkspeak_url',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(api, f1, f2, f3, f4, f5, f6, f7, f8):',
	'  t_url = \'https://api.thingspeak.com/update?api_key={}&field1={}&field2={}&field3={}&field4={}&field5={}&field6={}&field7={}&field8={}\'.format(api,f1,f2,f3,f4,f5,f6,f7,f8)', 
    '  res = prequests.get(t_url)',
    '  if(res.status_code == 200):',
    '      print(\'Success,content = \{\}\'.format(res.text))',
    '  else:',
    '      print("Fail!!")',
    '      print("Error code：",res.status_code)',
    '  res.close()']);

  var code = `thinkspeak_url(${value_key},${value_field1},${value_field2},${value_field3},${value_field4},${value_field5},${value_field6},${value_field7},${value_field8})\n`;
  return code;
};

Blockly.Python['http_get_status_code'] = function(block) {
  var code = 'http_response.status_code';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['http_get_data_text'] = function(block) {
  var code = 'http_response.text';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['http_get_data_number'] = function(block) {
  var code = 'float(http_response.text)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['http_is_ok'] = function(block) {
  var code = '(True if http_response.status_code == 200 else False)';
  return [code, Blockly.Python.ORDER_NONE];
};
