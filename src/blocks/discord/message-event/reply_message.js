import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "rreply_message";

const blockData = {
    "message0": "response message",
    "colour": "#5BA58C",
    "tooltip": "",
    "output": "Message",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = ["s4dreply", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message",
            "jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot"
        ]
    }
]);