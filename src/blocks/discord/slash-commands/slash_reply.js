import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";
import { getInputType } from "../../utils";

const blockName = "s4d_slash_reply";

const blockData = {
    "message0": "%{BKY_SLASH_REPLY}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "MessageEmbed", "String", "Number" ]
        },
        {
            "type": "field_checkbox",
            "name": "EPHEMERAL",
            "checked": false
        }
    ],
    "colour": "#5865F2",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_SLASH_REPLY_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const content = javascriptGenerator.valueToCode(block, "CONTENT", Order.ATOMIC);
    const flags = block.getFieldValue("EPHEMERAL") === "TRUE" ? ", flags: Discord.MessageFlags.Ephemeral" : "";
    const options = getInputType(block, "CONTENT") === "MessageEmbed" ? `{ ...${content}${flags} }` : `{ content: String(${content})${flags} }`;
    // Only the first answer to a command can be a reply, the next ones are follow-ups
    return `await (s4dinteraction.replied ? s4dinteraction.followUp(${options}) : s4dinteraction.reply(${options}));\n`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT",
        types: [
            "CONTENT"
        ]
    },
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_INTERACTION",
        types: [
            "s4d_on_slash_command",
            "s4d_on_button_click"
        ]
    }
]);
