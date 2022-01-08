import * as Blockly from "blockly";
const blockName = "mute_ahq";
const ahqcolor = ['#3366ff', '#FF10F0', '#33cc00', '#ff6666'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockData = {
    "message0": "Mute Member %1 %2 Time %3 %4 Reason %5",
    "args0": [{
        "type": "input_value",
        "name": "member",
        "check": "Member"
    },
    {"type": "input_space"},
    {
        "type": "input_value",
        "name": "time",
        "check": "Number"
    },
    {"type": "input_space"},{
        "type": "input_value",
        "name": "reason",
        "check": "String"
    },],
    "colour": listsGetRandomItem(ahqcolor, false),
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const member = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_NONE);
    const time = Blockly.JavaScript.valueToCode(block, "time", Blockly.JavaScript.ORDER_NONE);
    const reason = Blockly.JavaScript.valueToCode(block, "reason", Blockly.JavaScript.ORDER_NONE);
    const code = `${member.replace(".user", "")}.timeout((${time} * 1000), ${reason})
    `;
    return code;
};