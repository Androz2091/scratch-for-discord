import Blockly from "blockly/core"; // man i really dont want to register a validator for this -1:18AM
import { registerRestrictions } from "../../../restrictions";

const blockName = "gsa_ytdl_get_info";

/*const blockData = {
  "message0": "info %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "get_data",
      "options": [
        [
          "title",
          ".videoDetails.title"
        ],
        [
          "description",
          ".videoDetails.description"
        ],
        [
          "length",
          ".videoDetails.lengthSeconds"
        ],
        [
          "channel url",
          ".videoDetails.author.user_url"
        ],
        [
          "likes",
          ".videoDetails.likes"
        ],
        [
          "channel name",
          ".videoDetails.author.name"
        ],
        [
          "views",
          ".videoDetails.viewCount"
        ],
        [
          "upload date",
          ".videoDetails.publishDate"
        ],
        [
          "all data (returns object)",
          "NOOOOOOOOOL"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "must be below a get info from url () then block",
  "helpUrl": ""
};*/

Blockly.Blocks[blockName] = {
  init: function () {
    // this.jsonInit(blockData);
    let thisBlock = this;
    this.appendDummyInput()
      .appendField("info")
      .appendField(new Blockly.FieldDropdown(
        [
          [
            "title",
            ".videoDetails.title"
          ],
          [
            "description",
            ".videoDetails.description"
          ],
          [
            "length",
            ".videoDetails.lengthSeconds"
          ],
          [
            "channel url",
            ".videoDetails.author.user_url"
          ],
          [
            "likes",
            ".videoDetails.likes"
          ],
          [
            "channel name",
            ".videoDetails.author.name"
          ],
          [
            "views",
            ".videoDetails.viewCount"
          ],
          [
            "upload date",
            ".videoDetails.publishDate"
          ],
          [
            "all data (returns object)",
            "NOOOOOOOOOL"
          ]
        ],
        function(newMode) {
          switch(newMode) {
            case 'NOOOOOOOOOL': thisBlock.setOutput(true, 'Object'); break;
            case '.videoDetails.author.user_url':
            case '.videoDetails.author.name':
            case '.videoDetails.title':
            case '.videoDetails.description':
              thisBlock.setOutput(true, 'String')
            break;
            case '.videoDetails.publishDate':
            case '.videoDetails.likes':
            case '.videoDetails.viewCount':
            case '.videoDetails.lengthSeconds':
              thisBlock.setOutput(true, 'Number')
            break;
          }
          return newMode
        }), "get_data");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("must be below a get info from url () then block");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const get_data = block.getFieldValue("get_data");
  return [`S4D_APP_YTDL_JSON${get_data}`.replace("NOOOOOOOOOL", ''), Blockly.JavaScript.ORDER_NONE];
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