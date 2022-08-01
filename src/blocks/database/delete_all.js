import Blockly from "blockly/core";

const blockName = "s4d_delete_all_data_new";

const blockData = {
    "message0": "delete all data from the database with name %1",
    "args0": [
      {
            "type": "input_value",
            "name": "NAME",
            "check": "String"
      },
    ],
  "previousStatement": null,
    "nextStatement": null,
    "colour": "#5ba58b",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  const name2 = name.substring(1, (name.length - 1));
  const code =`${name2}.clear()`
  return code
};
