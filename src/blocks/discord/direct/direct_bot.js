import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_direct_bot";

const blockData = {
    "message0": "%{BKY_DIRECT_BOT}",
    "colour": "#5B80A5",
    "tooltip": "",
    "output": "Boolean",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["s4dmessage.author.bot", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_DIRECT",
        types: [
            "s4d_on_direct"
        ]
    }
]);
