Blockly.Python['linenotify'] = function(block) {

  Blockly.Python.definitions_['import_prequests'] = 'import prequests';
  Blockly.Python.definitions_['import_gc'] = 'import gc';

  var value_token = Blockly.Python.valueToCode(block, 'token', Blockly.Python.ORDER_ATOMIC) || "";
  
  var value_msg1 = Blockly.Python.valueToCode(block, 'm1', Blockly.Python.ORDER_ATOMIC) || "";
  var value_msg2 = Blockly.Python.valueToCode(block, 'm2', Blockly.Python.ORDER_ATOMIC) || "";
  var value_msg3 = Blockly.Python.valueToCode(block, 'm3', Blockly.Python.ORDER_ATOMIC) || "";
  var value_msg4 = Blockly.Python.valueToCode(block, 'm4', Blockly.Python.ORDER_ATOMIC) || "";
  var value_msg5 = Blockly.Python.valueToCode(block, 'm5', Blockly.Python.ORDER_ATOMIC) || "";
  var value_msg6 = Blockly.Python.valueToCode(block, 'm6', Blockly.Python.ORDER_ATOMIC) || "";

  
  var functionName = Blockly.Python.provideFunction_(
    'SendNotify',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(token, msg):',
    '  headers = {',
    '              \"Content-Type\": \"application/x-www-form-urlencoded\", ',
    '              \"Authorization\": \"Bearer \" +token',
    '             }',
    '  data=b\"message=\\n\"+msg',
    '  r = prequests.post(\"https://notify-api.line.me/api/notify\" ,data=data,headers=headers)',
    '  return r.json()']);

  var code = `gc.collect()\nSendNotify(${value_token}, str(${value_msg1})+str(${value_msg2})+str(${value_msg3})+str(${value_msg4})+str(${value_msg5})+str(${value_msg6}))\n`;
 // var code = `SendNotify(${value_token}, str(${value_msg1}+${value_msg2}+${value_msg3}+${value_msg4}+${value_msg5}+${value_msg6}))\n`;
  return code;
};

Blockly.Python['linenotify_package'] = function(block) {
  var value_auth = Blockly.Python.valueToCode(block, 'auth', Blockly.Python.ORDER_ATOMIC) || "";
  var value_urlpicId = Blockly.Python.valueToCode(block, 'urlpicId', Blockly.Python.ORDER_ATOMIC) || "";
  var value_msg = Blockly.Python.valueToCode(block, 'msg', Blockly.Python.ORDER_ATOMIC) || "";
  var value_stickerpackageid = Blockly.Python.valueToCode(block, 'stickerPackageId', Blockly.Python.ORDER_ATOMIC) || "";
  var value_stickerid = Blockly.Python.valueToCode(block, 'stickerId', Blockly.Python.ORDER_ATOMIC) || "";

  Blockly.Python.definitions_['import_prequests'] = 'import prequests';

  var functionName = Blockly.Python.provideFunction_(
    'SendNotify_package',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(token, msg,urlpicId="", stickerPackageId="", stickerId=""):',
    '  headers = {',
    '              \"Content-Type\": \"application/x-www-form-urlencoded\", ',
    '              \"Authorization\": \"Bearer \" +token',
    '             }',
    '  payload = b"message=" + msg',
    '  if len(urlpicId) > 0:',
    '    payload= payload+ "&imageThumbnail="+ urlpicId+ "&imageFullsize="+ urlpicId',
    '  if len(stickerPackageId) > 0:',
    '    payload = payload + "&stickerPackageId=" + stickerPackageId',
    '  if len(stickerId) > 0:',
    '    payload = payload + "&stickerId=" + stickerId',
    '  resp=prequests.post("https://notify-api.line.me/api/notify", headers = headers, data = payload)',
    '  print(resp.text)']);
   

  var code = `${functionName}(${value_auth}, str(${value_msg}),${value_urlpicId}, ${value_stickerpackageid}, ${value_stickerid})\n`;
  return code;
};


Blockly.Python['iftttlinenotify'] = function(block) {
  var value_event = Blockly.Python.valueToCode(block, 'event', Blockly.Python.ORDER_ATOMIC) || "";
  var value_key = Blockly.Python.valueToCode(block, 'apikey', Blockly.Python.ORDER_ATOMIC) || "";
   
  var value_msg1 = Blockly.Python.valueToCode(block, 'm1', Blockly.Python.ORDER_ATOMIC) || "";
  var value_msg2 = Blockly.Python.valueToCode(block, 'm2', Blockly.Python.ORDER_ATOMIC) || "";
  var value_msg3 = Blockly.Python.valueToCode(block, 'm3', Blockly.Python.ORDER_ATOMIC) || "";
 

  Blockly.Python.definitions_['import_prequests'] = 'import prequests';
  Blockly.Python.definitions_['import_gc'] = 'import gc';
  var functionName = Blockly.Python.provideFunction_(
    'IFTTTSendNotify',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(event,key, m1,m2,m3):',
    '  line_url=\'http://maker.ifttt.com/trigger/\'+event+\'/with/key/\'+key ',
    '  payload=b\'value1={}&value2={}&value3={}\'.format(str(m1),str(m2),str(m3))',
    '  r = prequests.post(line_url,headers={"Content-Type": "application/x-www-form-urlencoded"},data=payload) ',
    '  return r']);

  var code = `gc.collect()\nIFTTTSendNotify(${value_event},${value_key},str(${value_msg1}),str(${value_msg2}),str(${value_msg3}))\n`;

  return code;
};


Blockly.Python['get_newline'] = function(block) {
  Blockly.Python.definitions_['import_prequests'] = 'import prequests';
  
  var functionName = Blockly.Python.provideFunction_(
    'geturl_newline',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(symbol):',
    '  url_encode =prequests.encode_symbol(symbol)', 
    '  return url_encode']);

  var code =  `geturl_newline("\\n")`;
  return [code, Blockly.Python.ORDER_NONE];
};
