import * as Blockly from "blockly/core";

const blockName = "tts-test";

const blockData = {
  
  
  "type": "input_value",
  "message0": "Play OCR  %1 In channel  %2 Then %3 %4",
  "args0": [
    {
      "type": "field_input",
      "name": "ocr",
      "text": "Hello!"
    },
    {
      "type": "input:value",
      "name": "In channel",
      "check": "VoiceChannel",
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
  "inputsInline": false,
  "previousStatement": ".",
  "nextStatement": ".",
  "colour": "#002663",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function(block){
    const time = Blockly.JavaScript.valueToCode(block, "TIME", Blockly.JavaScript.ORDER_ATOMIC);
    return `await delay(Number(${time})*1000);\n`;
};
