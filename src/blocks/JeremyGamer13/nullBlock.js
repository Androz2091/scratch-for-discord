import Blockly from "blockly/core";

const blockName = "jg_null";

const blockData = {
    "message0": "null",
    "args0": [],
    "output": "Number",
    "colour": "#FF0000",
    "tooltip": "Returns as null.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
const code =  [`null`, Blockly.JavaScript.ORDER_NONE ];
return code;
}
