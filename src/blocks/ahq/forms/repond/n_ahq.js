import * as Blockly from "blockly";
const blockName = "ahqq_ahq_modal";
const ahqcolor = ['#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockData = {
    "message0": "Send jose/redo embeds",
    "args0": [
    ],
    "output": "ahq_type",
    "colour": listsGetRandomItem(ahqcolor, false),
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function() {
    const code = [`embed`, Blockly.JavaScript.ORDER_NONE];
    return code;
};