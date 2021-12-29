import * as Blockly from "blockly";
const blockName = "snd_value";
const ahqcolor = ['#3366ff', '#6600cc', '#33cc00', '#ff6666'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockData = {
    "message0": "Channel id/name %1 %2 server id/name %3",
    "args0": [{
        "type": "input_value",
        "name": "value",
        "check": "String"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "ch",
        "check": "String"
    }],
    "output": "ahqfind",
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
    let val = [];
    const value = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_NONE);
    const ch = Blockly.JavaScript.valueToCode(block, "ch", Blockly.JavaScript.ORDER_NONE);
    if (Number(value.replace("'", "").replace("'", ""))) {
        val.push(`s4d.client.guild.cache.find(server => server.id == ${value})`);
    } else {
        val.push(`s4d.client.guild.cache.find(server => server.name == ${value})`);
    }
    if (Number(ch.replace("'", "").replace("'", ""))) {
        val.push(`.channels.cache.find(channel => channel.id == ${ch})`);
    } else {
        val.push(`.channels.cache.find(channel => channel.name == ${ch})`);
    }
    const code =  [`${val.join("")}`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};