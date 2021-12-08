import * as Blockly from "blockly/core";

const blockName = "tts-test";

const blockData = {
  
  "type": "input_value",
  "message0": "Play TTS  %1 In channel  %2 Then %3 %4",
  "args0": [
    {
      "type": "field_input",
      "name": "TTS",
      "text": "Hello!"
    },
    {
      "type": "field_input",
      "name": "In channel",
      "text": ""
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "NAME",
      "align": "RIGHT"
    }
  ],
  "colour": "#49a4d1",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
test;
  return code;
};
