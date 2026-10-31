import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_wait_seconds";

const blockData = {
    "message0": "%{BKY_WAIT_SECONDS}",
    "args0": [
        {
            "type": "input_value",
            "name": "TIME",
            "check": [ "Number", "String" ]
        }
    ],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_WAIT_SECONDS_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const time = javascriptGenerator.valueToCode(block, "TIME", Order.ATOMIC);
    return `await delay(Number(${time})*1000);\n`;
};