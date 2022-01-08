import * as Blockly from "blockly/core";
const ahqcolor = ['#3366ff', '#FF10F0', '#33cc00', '#ff6666'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "s4d_get_rndmber";
//block working now working
const blockData = {
    "message0": "random member",
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "Member",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(){
    const code = ['randomUser.user', Blockly.JavaScript.ORDER_NONE];
    return code;
};