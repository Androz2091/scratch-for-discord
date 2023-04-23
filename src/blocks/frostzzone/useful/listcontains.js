import Blockly from "blockly/core";

const blockName = "list_contains";

const blockData = {
  "message0": "list %1 contains %2",
  "inputsInline": true,
  "args0": [
    {
      "type": "input_value",
      "name": "LIST",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "Number",
        "String"
      ]
    }
  ],
  "output": "Boolean",
  "colour": "%{BKY_LISTS_HUE}",
  "inline": true,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var value_list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_list}.includes(${value_name})`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};
