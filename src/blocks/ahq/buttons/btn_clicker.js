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
const blockName = "id_btn_clkr";
//block working now working
const blockData = {
    "message0": "button member",
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
    const code = ['(i.member.user)', Blockly.JavaScript.ORDER_NONE];
    return code;
};
