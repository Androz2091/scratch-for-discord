import Blockly from "blockly/core";

const blockName = "s4d_connected";

const blockData = {
    "message0": "%{BKY_CONNECTED}",
    "args0": [
    ],
    "output": "Boolean",
    "colour": "#a55b80",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return ['queue.connection', Blockly.JavaScript.ORDER_NONE ];
};
