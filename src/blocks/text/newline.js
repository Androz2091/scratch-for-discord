import Blockly from "blockly/core";

const blockName = "s4d_newline";

const blockData = {
    "message0": "%{BKY_NEWLINE}",
    "output": "String",
    "colour": "#5ba58b",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return [ '\'\\n\'', Blockly.JavaScript.ORDER_ATOMIC ];
};
