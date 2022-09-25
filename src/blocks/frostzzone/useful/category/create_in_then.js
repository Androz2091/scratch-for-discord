import Blockly from "blockly/core";

const blockName = "fz_channel";

const blockData = {
  "message0": "Create channel with name %1 In category %2 In server %5 Of the type %3 %4 then %6 %7",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "id",
      "check": [ "String", "Category" ]
    },
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "%{BKY_TEXT}",
          "GUILD_TEXT"
        ],
        [
          "%{BKY_VOICE}",
          "GUILD_VOICE"
        ],
        [
          "news",
          "GUILD_NEWS"
        ],
        [
          "stage",
          "GUILD_STAGE_VOICE"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "THEN"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "inputsInline": false,
  "colour": "#0c97f0",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
const cid = Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_ATOMIC);
  const type = block.getFieldValue("TYPE");
const server = Blockly.JavaScript.valueToCode(block, "server", Blockly.JavaScript.ORDER_ATOMIC);
const then = Blockly.JavaScript.statementToCode(block, "THEN", Blockly.JavaScript.ORDER_ATOMIC)
    const code = `${server}.channels.create(${name}, { type: "${type}", parent: ${cid} }).then(async cat =>{${then}});`;
    return code;
};
