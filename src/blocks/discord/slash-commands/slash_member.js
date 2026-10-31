import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_slash_member";

const blockData = {
    "message0": "%{BKY_SLASH_MEMBER}",
    "tooltip": "%{BKY_SLASH_MEMBER_TOOLTIP}",
    "colour": "#5865F2",
    "output": "Member"
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
        message: "RES_MUST_BE_IN_ON_SLASH_COMMAND",
        types: [
            "s4d_on_slash_command"
        ]
    }
]);
