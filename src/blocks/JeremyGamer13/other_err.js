import Blockly from "blockly/core";

const blockName = "frost_other_err";

const blockData = {
    "message0": "error",
    "args0": [],
    "output": [ "Boolean", "String" ],
    "colour": "#D14081",
    "tooltip": "Used in the \"if error\" part of the \"try, if error\" block.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ['err', Blockly.JavaScript.ORDER_NONE ];
    return code;
};