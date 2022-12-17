import * as Blockly from "blockly/core";
const blockName = "id_btn_srv";
//block working now working
const blockData = {
    "message0": "button server",
    "colour": '#33cc00',
    "output": "Server",
    "tooltip": "The server the buttons were posted in.",
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
