import * as Blockly from "blockly/core";

const blockName = "s4d_delete_channel";

const blockData = {
    "message0": "%{BKY_DELETE_CHANNEL}",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": [ "Channel" ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": false,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.delete();\n`;
    return code;
};