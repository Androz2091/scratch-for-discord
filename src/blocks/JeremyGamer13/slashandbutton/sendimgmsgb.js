//jimp.write('edited.jpg');
import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_slash_button_sendImageMSG";

const blockData = {
    "message0": "Send file %1 and message %3 with button row %4 as hidden? %2",
    "inputsInline": true,
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "Number", "String", "var", "Env", "Array", "List", "Attachment"]
        },
        {
            "type": "input_value",
            "name": "HIDE",
            "check": [ "Boolean", "var", "Env" ]
        },
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": [ "String", "var", "Env", "Number", "Embed", "MessageEmbed" ]
        },
        {
            "type": "input_value",
            "name": "ROW",
            "check": [ "String", "var", "Env" ]
        }
    ],
    "colour": 240,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "This sends the file with the matching file name, extension, and directory for a file saved in your bot's files. Supports (most) embeds and normal text. (Slash command block)",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    //embeds: [
  const fileNameandLocation = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  const hidden = Blockly.JavaScript.valueToCode(block, "HIDE", Blockly.JavaScript.ORDER_ATOMIC);
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
  if (embed) {
    code = `interaction.reply({
        files: ${stored},
        ephemeral: ${hidden},
        components: [${row}],
        ${msg}
     });
   `;
  } else {
    code = `interaction.reply({
        files: ${stored},
        ephemeral: ${hidden},
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
          "NAME", "MESSAGE", "HIDE"
        ]
    }
]);