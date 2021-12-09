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
const blockName = "highest_role";
//block working now working
const blockData = {
    "message0": "Highest role of member %1",
    "args0": [{
        "type": "input_value",
        "name": "member",
        "check": "Member"
    }],
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": ["Role"],
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block){
    const des = Blockly.JavaScript.valueToCode(block, "args", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`(${des.replace(".user", "")}.roles.highest())`, Blockly.JavaScript.ORDER_NONE];
    return code;
};