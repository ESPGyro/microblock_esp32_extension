Blockly.Python['dhtxx_read'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';
    Blockly.Python.definitions_['from_dhtxx_import_DHT'] = 'from dhtxx import DHT';
    
    var functionName = Blockly.Python.provideFunction_(
    'dhtxx_read',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(type, pin):',
    '  if type == 0:',
    '    d = DHT(pin,0)',
    '  elif type == 1:',
    '    d = DHT(pin,1)',
    '  else:',
    '    return [ -999, -999 ]',
    '  result =d.read()',
    '  if result.is_valid():',
    '    return [ result.temperature, result.humidity ]',
    '  else:',
    '    print("DHT read error")',
    '    return [ 0, 0 ]']);
    
    var dropdown_type = block.getFieldValue('type');
    var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var dropdown_valueindex = block.getFieldValue('valueIndex');

    var code = `${functionName}(${dropdown_type}, ${value_pin})[${dropdown_valueindex}]`;
    return [code, Blockly.Python.ORDER_NONE];
    
};

