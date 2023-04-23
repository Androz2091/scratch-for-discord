import * as Blockly from "blockly/core";
const blockName = "id_btn_clkr";
//block working now working
const blockData = {
    "message0": "button member",
    "colour": '#33cc00',
    "output": "Member",
    "tooltip": "The member who clicked the button.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = ['(i.member.user)', Blockly.JavaScript.ORDER_NONE];
    return code;
};
