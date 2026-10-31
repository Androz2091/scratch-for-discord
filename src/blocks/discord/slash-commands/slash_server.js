import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_slash_server";

const blockData = {
    "message0": "%{BKY_SLASH_SERVER}",
    "colour": "#5865F2",
    "output": "Server"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function() {
    return [ "s4dinteraction.guild", Order.ATOMIC ];
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
