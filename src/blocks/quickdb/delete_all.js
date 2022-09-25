import Blockly from "blockly/core";

const blockName = "qdb_delete_all";

const blockData = {
    "message0": "Delete all data from sqlite database",
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
   const code ='await qdb.deleteAll();\n'
  return code
};