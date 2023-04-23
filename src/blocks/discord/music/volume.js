import Blockly from "blockly/core";

const blockName = "s4d_volume";

const blockData = {
    "message0": "%{BKY_VOLUME}",
    "args0": [
        {
            "type": "input_value",
            "name": "QUEUE",
            "check": "queue"
        },
        {
            "type": "input_value",
            "name": "VOLUME",
            "check": ["Number","String"]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const queue = Blockly.JavaScript.valueToCode(block, "QUEUE", Blockly.JavaScript.ORDER_ATOMIC);
    const vol = Blockly.JavaScript.valueToCode(block, "VOLUME", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${queue}.setVolume(${vol})\n`;
    return code;
};
