import Blockly from "blockly/core";

const blockName = "s4d_button_think";

const blockData = {
    "message0": "think as hidden? %1",
    "args0": [
        {
            "type": "input_value",
            "name": "TOF",
            "check": ["Boolean"]
        }
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
    const tof = Blockly.JavaScript.valueToCode(block, "TOF", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `await i.deferReply({ ephemeral:${tof === null ? false : tof} });\n`
    return code;
};
