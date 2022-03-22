import Blockly from "blockly/core";

const blockName = "s4d_delete_all_data";

const blockData = {
    "message0": "Delete all data from database",
    "args0": [
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

Blockly.JavaScript[blockName] = function() {
   const code ='s4d.database.clear()'
  return code
};