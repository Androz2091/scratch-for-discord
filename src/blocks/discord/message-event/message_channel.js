import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_message_channel";

const blockData = {
    "message0": "%{BKY_MESSAGE_CHANNEL}",
    "colour": "#a55b80",
    "output": "Channel",
    "tooltip": "%{BKY_MESSAGE_CHANNEL_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function() {
    const code = ["s4dmessage.channel", Order.NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message",
            "s4d_on_message_edit"
        ]
    }
]);
