import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_delete_data";

const blockData = {
    "message0": "%{BKY_DELETE_DATA}",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
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
    return `s4d.database.delete(String(${key}));\n`;
};
