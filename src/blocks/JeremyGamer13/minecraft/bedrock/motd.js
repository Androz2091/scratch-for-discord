// result_bedrock

import Blockly from "blockly/core";

const blockName = "jg_minecraft_bedrock_motd";

const blockData = {
  "message0": "get %1 MOTD bedrock",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "raw",
          'raw'
        ],
        [
          "clean",
          'clean'
        ],
        [
          "HTML",
          'html'
        ]
      ],
    }

  ],
  "colour": 190,
  "output": "String",
  "tooltip": "Get the MOTD of the Bedrock server. Raw includes text tags, Clean removes the text tags, and HTML converts the MOTD to HTML.",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const type = block.getFieldValue("TYPE");
  const code = [`result_bedrock.motd.${type}[0]`, Blockly.JavaScript.ORDER_NONE];
  return code;
};