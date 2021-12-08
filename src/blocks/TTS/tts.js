import * as Blockly from "blockly/core";

const blockName = "tts-test";

const blockData = {
  "type": "input_value",
  "message0": "Play OCR  %1 In channel  %2 Then",
  "args0": [
    {
      "type": "field_input",
      "name": "ocr",
      "text": "Hello!"
    },
    {
      "type": "input_value",
      "name": "In channel",
      "text": ""
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
