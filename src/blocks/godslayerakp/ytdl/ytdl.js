import Blockly from "blockly/core";

const blockName = "gsa_ytdl";

const blockData = {
  "message0": "download video url %1 and save as file name %2",
  "args0": [
    {
      "type": "input_value",
      "name": "url",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "fs_name",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "downloads a youtube video",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const url = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC)
  const fs_name = Blockly.JavaScript.valueToCode(block, "fs_name", Blockly.JavaScript.ORDER_ATOMIC)
  return `
ytdl(${url})
  .pipe(fs.createWriteStream(${fs_name}));
`};