import * as Blockly from "blockly/core";

const blockName = "fz_delete_emoji";

const blockData = {
    "message0": "Delete emoji %1",
    "args0": [
        {
            "type": "input_value",
            "name": "EMOJI",
            "check": [ "Emoji" ]
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
    const emoji = Blockly.JavaScript.valueToCode(block, "EMOJI", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${emoji}.delete();\n`;
    return code;
};