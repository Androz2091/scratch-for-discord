import * as Blockly from "blockly/core";
function colourRandom() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
}
const blockName = "id_btn_srv";
//block working now working
const blockData = {
    "message0": "button server",
    "colour": colourRandom(),
    "output": "Server",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(){
    const code = ['(i.guild)', Blockly.JavaScript.ORDER_NONE];
    return code;
};
