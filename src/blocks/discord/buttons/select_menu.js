import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_select_menu";

const blockData = {
    "message0": "%{BKY_SELECT_MENU}",
    "args0": [
        {
            "type": "input_value",
            "name": "ID",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "PLACEHOLDER",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "OPTIONS",
            "check": "Array"
        }
    ],
    "colour": "#5865F2",
    "output": "SelectMenu",
    "inputsInline": false,
    "tooltip": "%{BKY_SELECT_MENU_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const id = javascriptGenerator.valueToCode(block, "ID", Order.ATOMIC);
    const placeholder = javascriptGenerator.valueToCode(block, "PLACEHOLDER", Order.ATOMIC) || "''";
    const options = javascriptGenerator.valueToCode(block, "OPTIONS", Order.MEMBER) || "[]";
    // Each text of the list is both what the user sees and the selected value
    return [ `new Discord.StringSelectMenuBuilder().setCustomId(String(${id})).setPlaceholder(String(${placeholder})).addOptions(${options}.map((option) => ({ label: String(option), value: String(option) })))`, Order.FUNCTION_CALL ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_BUTTON_ID",
        types: [
            "ID"
        ]
    },
    {
        type: "notempty",
        message: "RES_MENU_OPTIONS",
        types: [
            "OPTIONS"
        ]
    }
]);
