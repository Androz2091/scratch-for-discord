import Blockly from "blockly/core";

const blockName = "s4d_menu_reply";

const blockData = {
    "message0": "%{BKY_REPLY_MENU}",
    "args0": [
        {
            "type": "input_value",
            "name": "REPLY",
            "check": [ "String","Number" ]
        },
        {
            "type": "input_value",
            "name": "TRUEORFALSE",
            "check": [ "Boolean" ]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const tof = Blockly.JavaScript.valueToCode(block, "TRUEORFALSE", Blockly.JavaScript.ORDER_ATOMIC);
    const reply = Blockly.JavaScript.valueToCode(block, "REPLY", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `await i.reply({content:${reply},ephemeral:${tof === null ? false : tof}})\n`
    return code;
};
