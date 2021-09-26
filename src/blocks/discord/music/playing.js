import Blockly from "blockly/core";

const blockName = "s4d_playing";

const blockData = {
    "message0": "%{BKY_PLAYING2}",
    "args0": [
        {
            "type": "input_value",
            "name": "QUEUE",
            "check": "queue"
        },
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

Blockly.JavaScript[blockName] = function(block) {
    const queue = Blockly.JavaScript.valueToCode(block, "QUEUE", Blockly.JavaScript.ORDER_ATOMIC)
    return [`${queue}.playing`, Blockly.JavaScript.ORDER_NONE ];
};
