import * as Blockly from "blockly/core";
const blockName = "s4d_get_rndmber";
//block working now working
const blockData = {
    "message0": "random member",
    "colour": '#40BF4A',
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