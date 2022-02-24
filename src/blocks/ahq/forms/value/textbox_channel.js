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
const blockName = "channel_form_ahq";
//block working now working
const blockData = {
    "message0": "Form Channel",
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "Channel",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(){
    const code = ['i.channel', Blockly.JavaScript.ORDER_NONE];
    return code;
};
