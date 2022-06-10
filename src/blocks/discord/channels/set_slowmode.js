import * as Blockly from "blockly/core";


const blockName = "slowmode";

const blockData = {
    "message0": "set channel %1 to slowmode %2",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": ["Channel"]
        },
        {
            "type": "input_value",
            "name": "NUMBER",
            "check": "Number"
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const duration = Blockly.JavaScript.valueToCode(block, "NUMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.setRateLimitPerUser(${duration})\n`
    return code;
};
