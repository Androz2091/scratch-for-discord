import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_add_data";

const blockData = {
    "message0": "%{BKY_ADD_DATA}",
    "tooltip": "%{BKY_ADD_DATA_TOOLTIP}",
    "args0": [
        {
            "type": "input_value",
            "name": "COUNT",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        }
    ],
    "nextStatement": null,
    "previousStatement": null,
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
    const count = javascriptGenerator.valueToCode(block, "COUNT", Order.ATOMIC);
    return `s4d.database.add(String(${key}), Number(${count}));\n`;
};
