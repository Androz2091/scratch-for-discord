import * as Blockly from "blockly/core";

const blockName = "tts-test2";

const blockData = {
"message0": "Play OCR  %1 In channel  %2 Then %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "ocr",
      "check": "VoiceChannel"
    },
     {
      "type": "input_value",
      "name": "inchannel",
      "check": "VoiceChannel"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "THEN"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#002766",
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
