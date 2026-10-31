import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_console_log";

const blockData = {
    "message0": "%{BKY_CONSOLE_LOG}",
    "args0": [
        {
            "type": "input_value",
            "name": "VALUE"
        }
    ],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_CONSOLE_LOG_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const value = javascriptGenerator.valueToCode(block, "VALUE", Order.NONE);
    return `console.log(${value});\n`;
};
