import * as Blockly from "blockly/core";
const blockName = "id_btn_ahq";
//block working now working
const blockData = {
    "message0": "button id",
    "colour": '#33cc00',
    "output": "String",
    "tooltip": "The ID of the button that was pressed.",
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
