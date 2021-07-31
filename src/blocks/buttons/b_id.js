import Blockly from "blockly/core";


const blockName = "button_id";

const blockData = {
    "message0": "Button ID",
    "colour": "#5BA58C",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["interaction.customiD", Blockly.JavaScript.ORDER_NONE];
    return code;
};

