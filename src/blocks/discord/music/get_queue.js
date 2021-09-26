import Blockly from "blockly/core";

const blockName = "s4d_get_queue";

const blockData = {
    "message0": "%{BKY_GET_QUEUE}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        },
    ],
    "output": "queue",
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
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC)
    return [`s4d.player.getQueue(${server}.id)`, Blockly.JavaScript.ORDER_NONE ];
};
