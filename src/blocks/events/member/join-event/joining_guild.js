import Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "s4d_joining_guild";

const blockData = {
    "message0": "%{BKY_JOINING_GUILD}",
    "colour": "#D85E47",
    "output": "Server",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["s4d.joiningMember.guild", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MEMBER_JOIN",
        types: [
            "s4d_on_member_join"
        ]
    }
]);
