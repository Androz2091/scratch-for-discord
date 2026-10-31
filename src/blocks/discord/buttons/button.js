import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_button";

const blockData = {
    "message0": "%{BKY_BUTTON}",
    "args0": [
        {
            "type": "input_value",
            "name": "LABEL",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "ID",
            "check": [ "String", "Number" ]
        },
        {
            "type": "field_dropdown",
            "name": "STYLE",
            "options": [
                [
                    "%{BKY_BUTTON_PRIMARY}",
                    "Primary"
                ],
                [
                    "%{BKY_BUTTON_SECONDARY}",
                    "Secondary"
                ],
                [
                    "%{BKY_BUTTON_SUCCESS}",
                    "Success"
                ],
                [
                    "%{BKY_BUTTON_DANGER}",
                    "Danger"
                ]
            ]
        }
    ],
    "colour": "#5865F2",
    "output": "Button",
    "tooltip": "%{BKY_BUTTON_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const label = javascriptGenerator.valueToCode(block, "LABEL", Order.ATOMIC);
    const id = javascriptGenerator.valueToCode(block, "ID", Order.ATOMIC);
    const style = block.getFieldValue("STYLE");
    return [ `new Discord.ButtonBuilder().setLabel(String(${label})).setCustomId(String(${id})).setStyle(Discord.ButtonStyle.${style})`, Order.FUNCTION_CALL ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_NAME",
        types: [
            "LABEL"
        ]
    },
    {
        type: "notempty",
        message: "RES_BUTTON_ID",
        types: [
            "ID"
        ]
    }
]);
