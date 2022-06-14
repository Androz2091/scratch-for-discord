import * as Blockly from "blockly/core";
const blockName = "channel_form_ahq";
//block working now working
const blockData = {
    "message0": "Form Channel",
    "colour": '#33cc00',
    "output": "Channel",
    "tooltip": "The channel of the clicked form.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = ['i.channel', Blockly.JavaScript.ORDER_NONE];
    return code;
};
