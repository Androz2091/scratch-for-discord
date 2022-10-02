import Blockly from "blockly/core";

const blockName = "s4d_get_all_data2";

const blockData = {
    "message0": "Get all data from dootabase",
    "args0": [
    ],
    "output": "JSON",
    "colour": "#50a153",
    "tooltip": "Gets all data from dootabase\nOutputs a JSON map",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return [ 'dootabase.all()', Blockly.JavaScript.ORDER_ATOMIC ];
};
