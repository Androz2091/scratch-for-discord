import * as Blockly from "blockly/core";


  const blockName = "options_s";

  const blockData = {
      "message0": "options name %1 description %2 type %3 required %4",
      "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "DESCRIPTION",
            "check": [ "String" ]
        },
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "String",
                    "STRING"
                ],
                [
                    "Integer",
                    "INTEGER"
                ],
                [
                    "Boolean",
                    "BOOLEAN"
                ],
                [
                    "User",
                    "USER"
                ],
                [
                    "Channel",
                    "CHANNEL"
                ],
                [
                    "Role",
                    "ROLE"
                ],
                [
                    "Subcommand",
                    "SUB_COMMAND"
                ],
                [
                    "Subcommand Group",
                    "SUB_COMMAND_GROUP"
                ],
            ]
        },      
        {
            "type": "input_value",
            "name": "REQUIRED",
            "check": [ "Boolean" ]
        },

      ],
      "colour": "#40BF4A",
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": "",
      "helpUrl": ""
  };

  Blockly.Blocks[blockName] = {
      init: function() {
          this.jsonInit(blockData);
      }
  };

  Blockly.JavaScript[blockName] = function(block) {
    const type = block.getFieldValue("TYPE");
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const required = Blockly.JavaScript.valueToCode(block, "REQUIRED", Blockly.JavaScript.ORDER_ATOMIC);
    const description = Blockly.JavaScript.valueToCode(block, "DESCRIPTION", Blockly.JavaScript.ORDER_ATOMIC);
      const code = ` { \n name: ${name}, \n description: ${description}, \n type: '${type}', \n required: ${required}, \n }, \n `;
      return code;
  };
