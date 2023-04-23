import * as Blockly from "blockly/core";
const blockName = "embed_btn_ahq";
//block working now working
const blockData = {
    "message0": "send Jose/Redo embed",
    "colour": '#33cc00',
    "output": "ahq",
    "tooltip": "Send a Jose or Redo embed, which have no names.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = ['embeds: [embed]', Blockly.JavaScript.ORDER_NONE];
    return code;
};