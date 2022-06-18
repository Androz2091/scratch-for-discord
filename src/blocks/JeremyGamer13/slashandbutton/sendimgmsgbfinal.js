//jimp.write('edited.jpg');
import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_messages_files_send_reply_with_file_and_message_with_button_row_as_hidden";

const blockData = {
    "message0": "%5 reply with file %1 and message %3 with button row %4 as hidden? %2",
    "inputsInline": false,
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": ["Number", "String", "var", "Env", "Array", "List", "Attachment"]
        },
        {
            "type": "input_value",
            "name": "HIDE",
            "check": ["Boolean", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": ["String", "var", "Env", "Number", "Embed", "MessageEmbed"]
        },
        {
            "type": "input_value",
            "name": "ROW",
            "check": ["String", "var", "Env"]
        },
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "send",
                    "interaction.reply"
                ],
                [
                    "edit",
                    "interaction.editReply"
                ]
            ]
        },
    ],
    "colour": 230,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "This sends the file with the matching file name, extension, and directory for a file saved in your bot's files. Supports (most) embeds and normal text. (Slash command block)",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    },
    onchange: function () {
        let type = String(this.getFieldValue("TYPE"))
        if (this.getInput("warningMSG")) {
            this.removeInput("warningMSG")
        }
        if (type == "interaction.editReply") {
            this.setColour(240)
            if (this.getInput("HIDE")) {
                this.appendDummyInput("warningMSG")
                    .appendField("Edited replies can't change if it's hidden.");
            }
        } else {
            this.setColour(230)
        }
    }
};

Blockly.JavaScript[blockName] = function (block) {
    //embeds: [
    const fileNameandLocation = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const hidden = Blockly.JavaScript.valueToCode(block, "HIDE", Blockly.JavaScript.ORDER_ATOMIC);
    let buttonraw = Blockly.JavaScript.valueToCode(block, "ROW", Blockly.JavaScript.ORDER_ATOMIC);
    let buttonraw2 = String(buttonraw).replaceAll("\"", "")
    const row = String(buttonraw2).replaceAll("'", "")
    const type = block.getFieldValue("TYPE")
    let msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    let code;
    let hidden2 = `
    ephemeral: ${hidden},`
    if (String(type) == "interaction.editReply") {
        hidden2 = ``
    }
    let stored = `[${fileNameandLocation}]`
    if (fileNameandLocation.includes("['") || fileNameandLocation.includes("[\"")) {
        stored = fileNameandLocation
    }
    if (!(msg.includes("embeds: ["))) {
        msg = `content: String(${msg})`
    }
    code = `${type}({
    files: ${stored},${hidden2}
    components: [${row}],
    ${msg}
});
`;
    return code;
}

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT_GEN",
        types: [
            "NAME"
        ]
    }
]);