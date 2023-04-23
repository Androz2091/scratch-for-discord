import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "frost_real_reply_delete";

const blockData = {
    "message0": "Delete reply",
    "args0": [
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    var code = `s4dfrost_real_reply.delete();\n`
    return code
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_IN_REPLY_THEN",
        types: [
            "frost_real_reply_then",
            "frost_jg_real_reply_to_message_with_mention_then"
        ]
    }
]);