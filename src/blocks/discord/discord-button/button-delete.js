import Blockly from "blockly/core";

const blockName = "s4d_button_delete_reply";

const blockData = {
    "message0": "%{BKY_DELETE_REPLY}",
    "args0": [
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

Blockly.JavaScript[blockName] = function() {
    const code = `await i.deleteReply()\n`
    return code;
};

