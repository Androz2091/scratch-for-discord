import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_send_member";

const blockData = {
    "message0": "%{BKY_SEND_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": ["MessageEmbed", "String", "Number", "var"]
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
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
    const memberr = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    let member
    if (!(String(memberr).includes("s4d.client.users.cache.get(String("))) {
        member = memberr.replace(".user", "")
    } else {
        member = memberr
    }
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    if (block.getInput("CONTENT").connection.targetConnection) {
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
            block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
            null;
        if ((contentType === "var")) {
            const code = `${member}.send({content: String(${content})});\n`;
            return code;
        } else if ((contentType === "embed") || (!contentType && typeof contentType === "object")) {
            const code = `${member}.send({ embeds:[${content}]});\n`;
            return code;
        } else if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `${member}.send({${content}});\n`;
            return code;
        } else {
            const code = `${member}.send({content:String(${content})});\n`;
            return code;
        }
    } else {
        const code = `${member}.send({content:String(${content})});\n`;
        return code;
    }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_SEND_CHANNEL_CONTENT",
        types: [
            "CONTENT"
        ]
    },
    {
        type: "notempty",
        message: "RES_SEND_MEMBER_MISSING_MEMBER",
        types: [
            "MEMBER"
        ]
    }
]);
