import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_button_member";

const blockData = {
    "message0": "%{BKY_BUTTON_MEMBER}",
    "colour": "#187795",
    "output": "Member",
    "tooltip": "%{BKY_BUTTON_MEMBER_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function() {
    return [ "(await s4dinteraction.guild?.members.fetch(s4dinteraction.user.id))", Order.ATOMIC ];
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
