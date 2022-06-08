import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_reply_then";

const blockData = {
    "message0": "%{BKY_REPLY_THEN}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": ["Number", "String", "MessageEmbed", "embed", "var"]
        },
        {
            "type": "input_statement",
            "name": "THEN"
        },
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

Blockly.JavaScript[blockName] = function (block) {
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    if (block.getInput("CONTENT").connection.targetConnection) {
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
            block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
            null;
        if ((contentType === "var")) {
            const code = `s4dmessage.channel.send({content: String(${content})}).then(async (s4dreply) =>{\n ${statementThen} \n});\n`;
            return code;
        } else if ((contentType === "embed") || (!contentType && typeof contentType === "object")) {
            const code = `s4dmessage.channel.send({ embeds:[${content}]}).then(async (s4dreply) =>{\n ${statementThen} \n});\n`;
            return code;
        } else if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `s4dmessage.channel.send({${content}}).then(async (s4dreply) =>{\n ${statementThen} \n});\n`;
            return code;
        } else {
            const code = `s4dmessage.channel.send({content:String(${content})}).then(async (s4dreply) =>{\n ${statementThen} \n});\n`;
            return code;
        }
    } else {
        const code = `s4dmessage.channel.send(String(${content})).then(async (s4dreply) =>{\n ${statementThen} \n});\n`;
        return code;
    }
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
        type: "hasparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message",
            "jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot"
        ]
    }
]);
