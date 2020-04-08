import Blockly from "blockly/core";
import { registerRestriction } from "../../../restrictions";

const blockName = "s4d_mentioned_member";

const blockData = {
    "message0": "%{BKY_MENTIONED_MEMBER}",
    "colour": "#9966FF",
    "tooltip": "",
    "output": "Member",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`s4d.message.mentions.members.first()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestriction(blockName, {
    type: "toplevelparent",
    message: "RES_MUST_BE_IN_ON_MESSAGE",
    types: [
        "s4d_on_message"
    ]
});
