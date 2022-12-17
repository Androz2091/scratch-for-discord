
import Blockly from "blockly/core";

const blockName = "frost_fs_data";

const blockData = {
    "message0": "Data",
    "args0": [
    ],
    "output": "String",
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
    const code = ['data', Blockly.JavaScript.ORDER_NONE ];
    return code;
};