import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_joined_server";

const blockData = {
    "message0": "%{BKY_JOINED_SERVER}",
    "colour": "#D85E47",
    "output": "Server",
    "tooltip": "%{BKY_JOINED_SERVER_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function() {
    return [ "s4djoinedServer", Order.NONE ];
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_BOT_JOIN_SERVER",
        types: [
            "s4d_on_bot_join_server"
        ]
    }
]);
