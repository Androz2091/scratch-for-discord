import * as Blockly from "blockly/core";
const blockName = "server_form_ahq";
//block working now working
const blockData = {
    "message0": "Form Server",
    "colour": '#33cc00',
    "output": "Server",
    "tooltip": "The server the form was in.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = ['(i.guild)', Blockly.JavaScript.ORDER_NONE];
    return code;
};
