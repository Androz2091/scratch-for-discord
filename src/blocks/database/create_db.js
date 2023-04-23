import Blockly from "blockly/core";

const blockName = "s4d_database_create_new";

const blockData = {
  "message0": "Create a new database with name %1 & set file to %2 .json",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "FILE",
      "check": "String"
    }
  ],
  "colour": "#5ba58b",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  const name2 = name.substring(1, (name.length - 1));
  const file = Blockly.JavaScript.valueToCode(block, "FILE", Blockly.JavaScript.ORDER_ATOMIC);
  const file2 = file.substring(1, (file.length - 1));
  const code =`const ${name2} = new Database('./${file2}.json')`
  return code
};
