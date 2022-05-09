import Blockly from "blockly/core";

const blockName = "s4d_error";

const blockData = {
    "message0": "error",
    "output": "Boolean",
    "colour": "#D14081",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = `err`;
    return code;
};
