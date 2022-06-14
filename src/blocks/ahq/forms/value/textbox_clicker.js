import * as Blockly from "blockly/core";
const blockName = "clkr_form_ahq";
//block working now working
const blockData = {
    "message0": "Form Clicker",
    "colour": '#33cc00',
    "output": "Member",
    "tooltip": "The member who clicked the form.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = ['i.member.user', Blockly.JavaScript.ORDER_NONE];
    return code;
};
