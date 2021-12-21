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
const blockName = "send_ahq_embed";
//block working now working
const blockData = {
    "message0": "Send Embeds %1",
    "args0": [{
        "type": "input_value",
        "name": "Label",
        "check": "String"
    }],
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "MessageEmbed",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block){
    const code = [`embeds: [${Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE).replace("'", "").replace("'", "")}]`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};