import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_json_value";

const blockData = {
    "message0": "%{BKY_JSON_VALUE}",
    "args0": [
        {
            "type": "input_value",
            "name": "PATH",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "JSON",
            "check": "String"
        }
    ],
    "colour": "#D14081",
    "output": null,
    "tooltip": "%{BKY_JSON_VALUE_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const path = javascriptGenerator.valueToCode(block, "PATH", Order.ATOMIC);
    const json = javascriptGenerator.valueToCode(block, "JSON", Order.ATOMIC);
    // A path like "data.items.0.name" walks into nested objects and lists
    return [ `(String(${path}).split(".").reduce((value, key) => value?.[key], JSON.parse(String(${json}))) ?? "")`, Order.ATOMIC ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_JSON_PATH",
        types: [
            "PATH"
        ]
    },
    {
        type: "notempty",
        message: "RES_JSON_TEXT",
        types: [
            "JSON"
        ]
    }
]);
