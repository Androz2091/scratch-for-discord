import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_old_message_content";

const blockData = {
    "message0": "%{BKY_OLD_MESSAGE_CONTENT}",
    "colour": "#5BA58C",
    "output": "String",
    "tooltip": "%{BKY_OLD_MESSAGE_CONTENT_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

// Unknown (empty) for messages sent before the bot started
javascriptGenerator.forBlock[blockName] = function() {
    return [ "(s4doldMessage.content ?? \"\")", Order.NONE ];
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE_EDIT",
        types: [
            "s4d_on_message_edit"
        ]
    }
]);
