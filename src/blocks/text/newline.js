import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

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

javascriptGenerator.forBlock[blockName] = function() {
    return [ '\'\\n\'', Order.ATOMIC ];
};
