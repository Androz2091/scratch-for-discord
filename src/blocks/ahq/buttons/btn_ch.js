import * as Blockly from "blockly/core";
const ahqcolor = ['#33cc00', '#33cc00', '#33cc00', '#33cc00'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "id_btn_ch";
//block working now working
const blockData = {
    "message0": "button channel",
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "Channel",
    "tooltip": "The channel of the button message.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
    const code = ['(i.channel)', Blockly.JavaScript.ORDER_NONE];
    return code;
};
