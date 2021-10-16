import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_message_author_deleted";

const blockData = {
    "message0": "%{BKY_MESSAGE_AUTHOR}",
    "colour": "#5BA58C",
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
    const code = ["s4dmessage.member.user", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_DELETED",
        types: [
            "s4d_on_deleted"
        ]
    }
]);
