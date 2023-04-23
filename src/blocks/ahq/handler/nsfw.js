import * as Blockly from "blockly/core";

const blockName = "nsfw_ahq_hndler";
//block working now working
const blockData = {
    "message0": "NSFW Channel Warning message",
    "args0": [],
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
    const code = [`(ahqhandler[\`nsfw\`])`, Blockly.JavaScript.ORDER_NONE];
    return code;
};