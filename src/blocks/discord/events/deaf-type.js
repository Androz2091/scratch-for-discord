import Blockly from "blockly/core";

const blockName = "s4d_deaf_type";

const blockData = {
    "message0": "Deaf Type",
    "colour": "#187795",
    "output": "Boolean",
    "tooltip": "The deaf type. It can be self-deafed or server-deafed.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ['deafType', Blockly.JavaScript.ORDER_NONE];
    return code;
};