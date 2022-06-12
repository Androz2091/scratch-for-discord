import * as Blockly from "blockly/core";
const blockName = "ahq_presence";
//block working now working
const blockData = {
    "message0": "presence of member %1",
    "args0": [{
        "type": "input_value",
        "name": "member",
        "check": "Member"
    },],
    "colour": "#50a6c9",
    "output": "String",
    "tooltip": "Get the online, idle, dnd & offline precense of a member.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_ATOMIC).replace(".user", "").replace(".author", ".member");
    const code = [`String(${a}.presence.status || "offline")`, Blockly.JavaScript.ORDER_NONE];
    return code;
};