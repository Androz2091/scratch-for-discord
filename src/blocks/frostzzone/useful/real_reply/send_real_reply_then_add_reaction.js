import Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "frost_real_reply_add_reaction";

const blockData = {
    "message0": "Add reaction %1 to reply",
    "args0": [
        {
            "type": "input_value",
            "name": "REACTION",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const reaction = Blockly.JavaScript.valueToCode(block, "REACTION", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4dfrost_real_reply.react(${reaction});\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_ADD_REACTION_MISSING_REACTION",
        types: [
            "REACTION"
        ]
    },
    {
        type: "hasparent",
        message: "RES_MUST_BE_IN_REPLY_THEN",
        types: [
            "frost_real_reply_then",
            "frost_jg_real_reply_to_message_with_mention_then"
        ]
    }
]);