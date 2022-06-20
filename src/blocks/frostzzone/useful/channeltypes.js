import * as Blockly from "blockly/core";


const blockName = "frost_channel_types";

const blockData = {
  "message0": "Type Of Channel %2 is %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "Server: Text",
          "'GUILD_TEXT'"
        ],
        [
          "DM",
          "'DM'"
        ],
        [
          "Server: Voice",
          "'GUILD_VOICE'"
        ],
        [
          "Group DM",
          "'GROUP_DM'"
        ],
        [
          "Server: Category",
          "'GUILD_CATEGORY'"
        ],
        [
          "Server: News",
          "'GUILD_NEWS'"
        ],
        [
          "Server: Store",
          "'GUILD_STORE'"
        ],
        [
          "Server: News Thread",
          "'GUILD_NEWS_THREAD'"
        ],
        [
          "Server: Public Thread",
          "'GUILD_PUBLIC_THREAD'"
        ],
        [
          "Server: Private Thread",
          "'GUILD_PRIVATE_THREAD'"
        ],
        [
          "Server: Stage",
          "'GUILD_STAGE_VOICE'"
        ]
      ],
    },
    {
      "type": "input_value",
      "name": "Channel",
      "check": "Channel"
    }

  ],
  "colour": "#D14081",
  "output": "Boolean",
  "tooltip": "Check if the channel is one of these types of channels.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const type = block.getFieldValue("type");
  const channel = Blockly.JavaScript.valueToCode(block, "Channel", Blockly.JavaScript.ORDER_ATOMIC);
  const code = [`(${channel}.type) == ${type}`, Blockly.JavaScript.ORDER_NONE]

  return code;

};