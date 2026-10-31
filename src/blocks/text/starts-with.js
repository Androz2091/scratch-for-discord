import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_starts_with";

const blockData = {
    "message0": "%{BKY_STARTS_WITH}",
    "args0": [
        {
            "type": "input_value",
            "name": "STRING",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "SUBSTRING",
            "check": [ "String" ]
        }
    ],
    "output": "Boolean",
    "colour": "#5ba58b",
    "tooltip": "%{BKY_STARTS_WITH_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const string = javascriptGenerator.valueToCode(block, "STRING", Order.ATOMIC);
    const substring = javascriptGenerator.valueToCode(block, "SUBSTRING", Order.ATOMIC);
    const code = [ `String(${string}).startsWith(String(${substring}))`, Order.NONE ];
    return code;
};
