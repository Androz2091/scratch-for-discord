import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_selected_option";

const blockData = {
    "message0": "%{BKY_SELECTED_OPTION}",
    "colour": "#5BA58C",
    "output": "String",
    "tooltip": "%{BKY_SELECTED_OPTION_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

// Empty when a button was clicked
javascriptGenerator.forBlock[blockName] = function() {
    return [ "(s4dinteraction.isStringSelectMenu() ? s4dinteraction.values[0] : \"\")", Order.CONDITIONAL ];
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_BUTTON_CLICK",
        types: [
            "s4d_on_button_click"
        ]
    }
]);
