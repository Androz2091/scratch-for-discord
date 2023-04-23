import * as Blockly from "blockly/core";

const blockName = "owner_n_ahq_hndler";
//block working now working
const blockData = {
    "message0": "Not Owner Message",
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
    const code = ['(ahqhandler[`not-owner`])', Blockly.JavaScript.ORDER_NONE];
    return code;
};
