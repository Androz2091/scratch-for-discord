import * as Blockly from "blockly/core";

const blockName = "emit_event";

const blockData = {
  "message0": "broadcast event %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "colour": "#F5AB1A",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "Create event",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  var code
  let value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  code = `eventEmitter.emit(${value_name});
`;
  return code;
};