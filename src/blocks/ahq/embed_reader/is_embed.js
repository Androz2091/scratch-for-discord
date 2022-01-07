import * as Blockly from "blockly/core";
const ahqcolor = ['#3366ff', '#6600cc', '#33cc00', '#ff6666'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "ahq_embed_is";
//block working now working
const blockData = {
    "message0": "Is there embed on message %1 ?",
    "args0": [{
        "type": "input_value",
        "name": "member",
        "check": "Message"
    },],
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "Boolean",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block){
    const a = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_ATOMIC).replace(".user", "").replace(".author", ".member");
    const code = [`(${a}.embeds[0])`, Blockly.JavaScript.ORDER_NONE];
    return code;
};