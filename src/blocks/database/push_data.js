import Blockly from "blockly/core";

const blockName = "s4d_push_data_new";

const blockData = {
    "type": "s4d_data_push_new",
  "message0": "push %1 %2 to %3 from the database with name %4",
  "args0": [
    {
      "type": "input_value",
      "name": "KEY",
      "check": [ "String", "Number" ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#5ba58b",
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const name2 = name.substring(1, (name.length - 1));
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    return `${name2}.push(String(${key}), ${value});\n`;
};
