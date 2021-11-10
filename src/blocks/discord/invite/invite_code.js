import Blockly from "blockly/core";


const blockName = "s4d_invite_code";

const blockData = {
    "message0": "%{BKY_INVITE_CODE}",
    "colour": "#5BA58C",
    "output": "String",
    "tooltip": "In invite create/delete",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["invite.code", Blockly.JavaScript.ORDER_NONE];
    return code;
};