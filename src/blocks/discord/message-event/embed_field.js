import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_embed_field";

const blockData = {
    "message0": "%{BKY_EMBED_FIELD}",
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "VALUE",
            "check": [ "String", "Number" ]
        },
        {
            "type": "field_checkbox",
            "name": "INLINE",
            "checked": false
        }
    ],
    "colour": "#40BF4A",
    "output": "EmbedField",
    "tooltip": "%{BKY_EMBED_FIELD_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const name = javascriptGenerator.valueToCode(block, "NAME", Order.ATOMIC);
    const value = javascriptGenerator.valueToCode(block, "VALUE", Order.ATOMIC);
    const inline = block.getFieldValue("INLINE") === "TRUE";
    return [ `{ name: String(${name}), value: String(${value}), inline: ${inline} }`, Order.ATOMIC ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_NAME",
        types: [
            "NAME"
        ]
    },
    {
        type: "notempty",
        message: "RES_EMBED_FIELD_VALUE",
        types: [
            "VALUE"
        ]
    }
]);
