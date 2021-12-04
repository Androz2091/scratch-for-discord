import * as Blockly from "blockly/core";
function colourRandom() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
}
const blockName = "id_btn_ahq";
//block working now working
const blockData = {
    "message0": "button id",
    "colour": colourRandom(),
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
    const code = ['(i.customId)', Blockly.JavaScript.ORDER_NONE];
    return code;
};
