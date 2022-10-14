import * as Blockly from "blockly/core";

const blockName = "prefix_ahq_hndler";
//block working now working
const blockData = {
    "message0": "bot prefix (handler)",
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
    const code = ['(ahqhandler[`prefix`])', Blockly.JavaScript.ORDER_NONE];
    return code;
};
