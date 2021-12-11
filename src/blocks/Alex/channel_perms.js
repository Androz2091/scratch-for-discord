import Blockly from "blockly/core";

const blockName = "channel_perms";

const blockData = {
"message0": "%1  permission  %2 in channel  %4 to role / member / everyone %3"
  "args0": [
    {
      "type": "field_dropdown",
      "name": "ad",
      "options": [
        [
          "Allow",
          "true"
        ],
        [
          "Deny",
          "false"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "perm",
      "options": [
        [
          "CREATE_INSTANT_INVITE",
          "CREATE_INSTANT_INVITE"
        ],
        [
          "VIEW_CHANNEL",
          "VIEW_CHANNEL"
        ],
        [
          "SEND_MESSAGES",
          "SEND_MESSAGES"
        ],
        [
          "SEND_TTS_MESSAGES",
          "SEND_TTS_MESSAGES"
        ],
        [
          "MANAGE_MESSAGES",
          "MANAGE_MESSAGES"
        ],
        [
          "EMBED_LINKS",
          "EMBED_LINKS"
        ],
        [
          "ATTACH_FILES",
          "ATTACH_FILES"
        ],
        [
          "READ_MESSAGE_HISTORY",
          "READ_MESSAGE_HISTORY"
        ],
        [
          "MENTION_EVERYONE",
          "MENTION_EVERYONE"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "to",
      "check": ["Member", "Role", "Everyone"]
    },
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0c97f0",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const trufal = block.getFieldValue("ad");
const perm = block.getFieldValue("perm");
const to = Blockly.JavaScript.valueToCode(block, "to", Blockly.JavaScript.ORDER_ATOMIC);
const channel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.permissionOverwrites.edit(${to}, { ${perm}: ${trufal} });`;
    return code;
};
