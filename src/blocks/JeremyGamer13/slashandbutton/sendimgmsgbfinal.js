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
            "check": ["String", "var", "Env", "ButtonRow"]
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
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Tooltip is loading, please wait...",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    },
    onchange: function () {
        let type = String(this.getFieldValue("TYPE"))
        if (type == "interaction.editReply") {
            this.setColour("#478ded")
            this.setTooltip("This edits the reply to have the file with the matching file name, extension, and directory for a file saved in your bot's files. Edited replies cannot change the hidden state of the reply. Supports (most) embeds and normal text. (Slash command block)")
        } else {
            this.setColour("#4C97FF")
            this.setTooltip("This sends the file with the matching file name, extension, and directory for a file saved in your bot's files. Supports (most) embeds and normal text. (Slash command block)")
        }
    }
};

Blockly.JavaScript[blockName] = function (block) {
    //embeds: [
    const fileNameandLocation = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const hidden = Blockly.JavaScript.valueToCode(block, "HIDE", Blockly.JavaScript.ORDER_ATOMIC);
    const row = String(Blockly.JavaScript.valueToCode(block, "ROW", Blockly.JavaScript.ORDER_ATOMIC)).replaceAll('"', "").replaceAll("'", "");
    const type = block.getFieldValue("TYPE")
    let msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    let code;
    let rowMSG = ""
    let hidden2 = `
    ephemeral: ${hidden},`
    if (String(type) == "interaction.editReply") {
        hidden2 = ``
    } else if (String(hidden) == null || String(hidden) == "") {
        hidden2 = `
    ephemeral: false,`
    }
    let stored = `[${fileNameandLocation}]`
    if (fileNameandLocation.includes("['") || fileNameandLocation.includes("[\"")) {
        stored = fileNameandLocation
    }
    if (String(msg) == "" || String(msg) == null) {
        msg = ``
    } else if (!(msg.includes("embeds: ["))) {
        msg = `content: String(${msg})`
    }
    if (!(String(row) == "" || String(row) == null)) {
        rowMSG = `components: [${row}],`
    }
    code = `${type}({
    files: ${stored},${hidden2}
    ${rowMSG}
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