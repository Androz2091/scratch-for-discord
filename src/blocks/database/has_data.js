import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_has_data";

const blockData = {
    "message0": "%{BKY_HAS_DATA}",
    "tooltip": "%{BKY_HAS_DATA_TOOLTIP}",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        }
    ],
    "output": "Boolean",
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
    return [ 's4d.database.has(String('+key+'))', Order.ATOMIC ];
};
