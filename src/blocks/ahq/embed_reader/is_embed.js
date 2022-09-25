import * as Blockly from "blockly/core";
const blockName = "ahq_embed_is";
//block working now working
const blockData = {
    "message0": "Is there embed on message %1 ?",
    "args0": [{
        "type": "input_value",
        "name": "member",
        "check": "Message"
    },],
    "colour": '#40BF4A',
    "output": "Boolean",
    "tooltip": "Checks if a message has an embed.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_ATOMIC).replace(".user", "").replace(".author", ".member");
    const code = [`(${a}.embeds[0])`, Blockly.JavaScript.ORDER_NONE];
    return code;
};