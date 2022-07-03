import Blockly from "blockly/core";

const blockName = "gsa_ytdl_info";

const blockData = {
  "type": "gsa_ytdl_info",
  "message0": "get info from url %1 then %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "url"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "STATEMENTS"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "gets the videos info",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const url = Blockly.JavaScript.valueToCode(block, "url", Blockly.JavaScript.ORDER_ATOMIC)
  const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC)
  return `let S4D_APP_json = await ytdl.getInfo(${url})
${statements}
`
}