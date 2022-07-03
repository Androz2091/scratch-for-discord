import * as Blockly from "blockly/core";

const blockName = "frost_fs_rename";

const blockData = {
  "message0": "Rename file %1 to %3 then %2",
  "args0": [
    {
      "type": "input_value",
      "name": "FILE",
      "check": ["String", "var"]
    },
    {
      "type": "input_statement",
      "name": "THEN"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": ["String", "var"]
    },
  ],
  "colour": "#4C97FF",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const file = Blockly.JavaScript.valueToCode(block, "FILE", Blockly.JavaScript.ORDER_ATOMIC);
  const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");

  const code = `fs.renameFileSync(${file}, ${name}, async function (err) {\n ${statementThen} \n});\n`;
  return code
};