//jimp.write('edited.jpg');
import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_slash_sendImage";

const blockData = {
    "message0": "Send file %1 as hidden? %2",
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
        }
    ],
    "colour": 230,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "This sends the file with the matching file name, extension, and directory for a file saved in your bot's files. (Slash command block)",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const fileNameandLocation = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  const hidden = Blockly.JavaScript.valueToCode(block, "HIDE", Blockly.JavaScript.ORDER_ATOMIC);
  var stored = `[${fileNameandLocation}]`
  if (fileNameandLocation.includes("['") || fileNameandLocation.includes("[\"")) {
    stored = fileNameandLocation
  }
  const code = `interaction.reply({ 
      files: ${stored},
      ephemeral: ${hidden}
    });
  `;
  return code;
}

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT_GEN",
        types: [
          "NAME",
          "HIDE"
        ]
    }
]);