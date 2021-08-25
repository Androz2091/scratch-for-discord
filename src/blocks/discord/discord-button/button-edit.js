import Blockly from "blockly/core";

const blockName = "s4d_button_edit";

const blockData = {
    "message0": "%{BKY_BUTTON_EDIT}",
    "args0": [
        {
            "type": "input_value",
            "name": "REPLY",
            "check": [ "String","Number" ]
        },

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
    const reply = Blockly.JavaScript.valueToCode(block, "REPLY", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `await i.editReply(${reply})\n`
    return code;
};

