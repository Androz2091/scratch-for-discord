import Blockly from "blockly/core";

const blockName = "qdb_all";

const blockData = {
    "message0": "Get all data from SQLite DB",
    "args0": [
    ],
    "output": "JSON",
    "colour": "#5ba58b",
    "tooltip": "Gets all data from database\nOutputs a JSON map",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return [ 'await qdb.all()\n', Blockly.JavaScript.ORDER_ATOMIC ];
};