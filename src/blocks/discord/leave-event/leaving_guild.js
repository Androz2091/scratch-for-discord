import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_leaving_guild";

const blockData = {
    "message0": "%{BKY_LEAVING_GUILD}",
    "colour": "#D85E47",
    "output": "Server",
    "tooltip": "%{BKY_LEAVING_GUILD_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function() {
    const code = ["s4d.leavingMember.guild", Order.NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MEMBER_LEAVE",
        types: [
            "s4d_on_member_leave"
        ]
    }
]);
