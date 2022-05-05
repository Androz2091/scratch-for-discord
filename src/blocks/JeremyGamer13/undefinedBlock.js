import Blockly from "blockly/core";

const blockName = "jg_undefined";

const blockData = {
    "message0": "undefined",
    "args0": [],
    "output": "Number",
    "colour": "#FF0000",
    "tooltip": "Returns as undefined.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
const code =  [`undefined`, Blockly.JavaScript.ORDER_NONE ];
return code;
}
