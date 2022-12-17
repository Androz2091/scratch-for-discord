//jimp.write('edited.jpg');
import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "jg_messages_send_file_and_message_with_button_row_to_channel";

const blockData = {
    "message0": "send file %1 and message %3 with button row %4 to channel %2",
    "inputsInline": true,
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": ["Number", "String", "var", "Env", "Array", "List", "Attachment"]
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": ["Channel"]
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
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "This sends the file with the matching file name, extension, and directory for a file saved in your bot's files. Supports (most) embeds and normal text.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    //embeds: [
    const fileNameandLocation = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const fileSendChannel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    var buttonraw = Blockly.JavaScript.valueToCode(block, "ROW", Blockly.JavaScript.ORDER_ATOMIC);
    var buttonraw2 = String(buttonraw).replaceAll("\"", "")
    const row = String(buttonraw2).replaceAll("'", "")
    var msg = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    var code, embed;
    var stored = `[${fileNameandLocation}]`
    if (fileNameandLocation.includes("['") || fileNameandLocation.includes("[\"")) {
        stored = fileNameandLocation
    }
    if (msg.includes("embeds: [")) {
        embed = true
    } else {
        embed = false
    }
    if (String(msg) == "" || String(msg) == null) {
        embed = true
        msg = ""
    }
    if (embed) {
        code = `await ${fileSendChannel}.send({
        files: ${stored},
        components: [${row}],
        ${msg}
     });
   `;
    } else {
        code = `await ${fileSendChannel}.send({
        files: ${stored},
        components: [${row}],
        content: String(${msg})
     });
   `;
    }
    return code;
}

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT_GEN",
        types: [
            "NAME"
        ]
    },
    {
        type: "notempty",
        message: "RES_SEND_CHANNEL_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);