import * as Blockly from "blockly/core";
const blockName = "id_form_ahq";
//block working now working
const blockData = {
    "message0": "Form Id",
    "colour": '#33cc00',
    "output": "String",
    "tooltip": "The ID of the clicked form.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = ['(i.customId)', Blockly.JavaScript.ORDER_NONE];
    return code;
};
