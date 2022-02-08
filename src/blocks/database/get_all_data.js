import Blockly from "blockly/core";

const blockName = "s4d_get_all_data";

const blockData = {
    "message0": "Get all data from database",
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
    return [ 's4d.database.all()', Blockly.JavaScript.ORDER_ATOMIC ];
};