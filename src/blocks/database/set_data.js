import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_set_data";

const blockData = {
    "message0": "%{BKY_SET_DATA}",
    "tooltip": "%{BKY_SET_DATA_TOOLTIP}",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "VALUE"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5ba58b",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const key = javascriptGenerator.valueToCode(block, "KEY", Order.ATOMIC);
    const value = javascriptGenerator.valueToCode(block, "VALUE", Order.ATOMIC);
    return `s4d.database.set(String(${key}), ${value});\n`;
};
