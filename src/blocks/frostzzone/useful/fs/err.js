import Blockly from "blockly/core";

const blockName = "frost_fs_err";

const blockData = {
    "message0": "err",
    "args0": [
    ],
    "output": [ "Boolean", "String" ],
    "colour": "#a5745b",
    "tooltip": "",
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