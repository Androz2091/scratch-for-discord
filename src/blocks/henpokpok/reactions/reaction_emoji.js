import * as Blockly from "blockly";


const blockName = "react_emoji";

const blockData = {
    "message0": "Reacting emoji",
    "colour": "#79F05C",
    "tooltip":"Emoji of the reaction",
    "output": "String"

};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
    const code = ["reaction.emoji.name", Blockly.JavaScript.ORDER_NONE];
    return code;
};


