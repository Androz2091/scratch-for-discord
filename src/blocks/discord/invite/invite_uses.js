import Blockly from "blockly/core";


const blockName = "s4d_inv_uses";

const blockData = {
    "message0": "%{BKY_INVITE_USES}",
    "colour": "#5BA58C",
    "output": "Number",
    "tooltip": "In invite create/delete",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["invite.uses", Blockly.JavaScript.ORDER_NONE];
    return code;
};