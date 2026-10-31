import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_last_sent_message";

const blockData = {
    "message0": "%{BKY_LAST_SENT_MESSAGE}",
    "colour": "#41AAC0",
    "output": "Message",
    "tooltip": "%{BKY_LAST_SENT_MESSAGE_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

// The reply and send blocks keep it up to date
javascriptGenerator.forBlock[blockName] = function() {
    return [ "s4d.lastMessage", Order.NONE ];
};
