import * as Blockly from "blockly/core";

const blockName = "typing_start";

const blockData = {
  "message0": "When someone starts typing %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "THEN"
    }
  ],
  "colour": "#f79400",
  "tooltip": "The blocks inside will run whenever someone starts to type.",
  "helpUrl": ""
}
Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const then = Blockly.JavaScript.statementToCode(block, "THEN");
  const code = `s4d.client.on('typingStart', async (s4dTyping) => {\n${then}\n});\n`;
  return code;
};
