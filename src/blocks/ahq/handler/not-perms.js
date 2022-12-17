import * as Blockly from "blockly/core";

const blockName = "not_perms_ahq_hndler";
//block working now working
const blockData = {
    "message0": "Not MOD Perms Message",
    "colour": '#33cc00',
    "output": "String",
    "tooltip": "???",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = ['(ahqhandler[`not-perms`])', Blockly.JavaScript.ORDER_NONE];
    return code;
};
