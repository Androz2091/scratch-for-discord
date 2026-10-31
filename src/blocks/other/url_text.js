import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_url_text";

const blockData = {
    "message0": "%{BKY_URL_TEXT}",
    "args0": [
        {
            "type": "input_value",
            "name": "URL",
            "check": "String"
        }
    ],
    "colour": "#D14081",
    "output": "String",
    "tooltip": "%{BKY_URL_TEXT_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const url = javascriptGenerator.valueToCode(block, "URL", Order.ATOMIC);
    return [ `(await (await fetch(String(${url}))).text())`, Order.ATOMIC ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_URL",
        types: [
            "URL"
        ]
    }
]);
