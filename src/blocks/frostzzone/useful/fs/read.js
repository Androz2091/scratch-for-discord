import * as Blockly from "blockly/core";

const blockName = "frost_fs_read";

const blockData = {
  "message0": "Read file %1 then %2",
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
  const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");

  const code = `await fs.readFile(${file}, async function(err, data) {\n ${statementThen} \n});\n`;
  return code
};
