import * as Blockly from "blockly";
const blockName = "server_file";
const ahqcolor = ['#3366ff', '#3366ff', '#3366ff', '#3366ff'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockData = {
    "type": "block_type",
    "message0": "Load Server.js in your project!",
    "args0": [],
    "colour": listsGetRandomItem(ahqcolor, false),
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function() {
    const code =  `//let serverjs = 'true';\n`;
    return code;
};