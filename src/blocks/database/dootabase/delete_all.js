import Blockly from "blockly/core";

const blockName = "s4d_delete_all_data2";

const blockData = {
    "message0": "Delete current dootabase data",
    "args0": [
    ],
  "previousStatement": null,
    "nextStatement": null,
    "colour": "#50a153",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
   const code ='dootabase.clear()\n'


  return code
};
