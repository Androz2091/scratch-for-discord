import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_slash_channel";

const blockData = {
    "message0": "%{BKY_SLASH_CHANNEL}",
    "tooltip": "%{BKY_SLASH_CHANNEL_TOOLTIP}",
    "colour": "#5865F2",
    "output": "Channel"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function() {
    return [ "s4dinteraction.channel", Order.ATOMIC ];
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
