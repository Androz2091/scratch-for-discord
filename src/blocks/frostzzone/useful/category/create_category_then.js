import * as Blockly from "blockly/core";

const blockName = "create_category_then";

const blockData = {
  "message0": "Create Category/Channel with name %1 on server %2 of type %3 %4 then %5",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": ["String", "Number"]
    },
    {
      "type": "input_value",
      "name": "SERVER",
      "check": ["Server"]
    },
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "%{BKY_CATEGORY}",
          "GUILD_CATEGORY"
        ],
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
      "type": "input_statement",
      "name": "THEN"
    }
  ],
  "colour": "#4C97FF",
  "previousStatement": null,
  "nextStatement": null,
  "inputsInline": false,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const type = block.getFieldValue("TYPE");
  const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
  var then = Blockly.JavaScript.statementToCode(block, 'THEN');
  const code = `${server}.channels.create(${name}, { type: '${type}' }).then(async cat => {${then}});\n`;
  return code;
};
