import * as Blockly from "blockly/core";

const blockName = "owner_ahq_hndler";
//block working now working
const blockData = {
    "message0": "Member %1 is owner?",
    "args0": [{
        "type": "input_value",
        "name": "m",
        "check": "Member"
    }],
    "colour": '#33cc00',
    "output": "Boolean",
    "tooltip": "???",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    let member = Blockly.JavaScript.valueToCode(block, "m", Blockly.JavaScript.ORDER_ATOMIC);
    let final = member.replace(".author", ".member.user")
    const code = [`String(${final}.id) == (ahqhandler[\`owner\`])`, Blockly.JavaScript.ORDER_NONE];
    return code;
};