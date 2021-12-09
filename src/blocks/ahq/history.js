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
const blockName = "s4d_history";
//block working now working
const blockData = {
    "message0": "History of s4d!",
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(){
    const code = [`\`s4d means scratch for discord
    s4d was created mainly by \\\`Androz\\\`
    The Devs of the current preview \\\`469\\\` are:-
    1. Androz (of course)
    2. Jose
    3. Redo
    4. Frostzzone
    5. Retro
    6. AHQ
    
    Official s4d server:- https://discord.gg/cB2g5f4Ypq\``, Blockly.JavaScript.ORDER_NONE];
    return code;
};
