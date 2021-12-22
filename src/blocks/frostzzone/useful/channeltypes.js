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
          "Guild Text",
          "'GUILD_TEXT'"
        ],
        [
          "DM",
          "'DM'"
        ],
        [
          "Guild Voice",
          "'GUILD_VOICE'"
        ],
        [
          "Group DM",
          "'GROUP_DM'"
        ],
        [
          "Guild Category",
          "'GUILD_CATEGORY'"
        ],
        [
          "Guild News",
          "'GUILD_NEWS'"
        ],
        [
          "Guild Store",
          "'GUILD_STORE'"
        ],
        [
          "Guild News Thread",
          "'GUILD_NEWS_THREAD'"
        ],
        [
          "Guild Public Thread",
          "'GUILD_PUBLIC_THREAD'"
        ],
        [
          "Guild Private Thread",
          "'GUILD_PRIVATE_THREAD'"
        ],
        [
          "Guild Stage Voice",
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
  "tooltip": "",
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