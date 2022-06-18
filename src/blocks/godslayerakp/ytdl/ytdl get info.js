import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "gsa_ytdl_get_info";

const blockData = {
  "type": "gsa_ytdl_get_info",
  "message0": "info %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "get_data",
      "options": [
        [
          "title",
          "videoDetails.title"
        ],
        [
          "description",
          "videoDetails.description"
        ],
        [
          "length",
          "videoDetails.lengthSeconds"
        ],
        [
          "channel url",
          "videoDetails.author.user_url"
        ],
        [
          "likes",
          "videoDetails.likes"
        ],
        [
          "channel name",
          "videoDetails.author.name"
        ],
        [
          "views",
          "videoDetails.viewCount"
        ],
        [
          "upload date",
          "videoDetails.publishDate"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "must be below a get info from url () then block",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const get_data = block.getFieldValue("get_data");
  return [`S4D_APP_json.${get_data}`, Blockly.JavaScript.ORDER_NONE];
}
registerRestrictions(blockName, [
  {
    type: "hasparent",
    message: "$This block needs to be placed in a \"get info from url then\" block!",
    types: [
      "gsa_ytdl_info"
    ]
  }
]);