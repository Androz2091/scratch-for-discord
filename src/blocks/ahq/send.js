import * as Blockly from "blockly";
const blockName = "snd_ahq";
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
    "message0": "Send %1 %2 channel %3 %4 %5 server %6 %7",
    "args0": [{
        "type": "input_value",
        "name": "files",
        "check": ["String", "MessageEmbed"]
    }],
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
    const code = `s4d.client.guilds.cache.find(sr => sr.${power} == ${a}).channels.cache.find(ch => ch.${p} == ${b}).send(${code}).catch(err => {console.log(err)})`;
    return code;
};