/*
SUB_COMMAND	- 1	
SUB_COMMAND_GROUP	- 2	
STRING	- 3	
INTEGER	- 4	Any integer between -2^53 and 2^53
BOOLEAN	- 5	
USER	- 6	
CHANNEL	- 7	Includes all channel types + categories
ROLE	- 8	
MENTIONABLE	- 9	Includes users and roles
NUMBER	- 10	Any double between -2^53 and 2^53
ATTACHMENT	- 11	attachment object
*/
import * as Blockly from "blockly/core";

const blockName = "frost_slash_options2";

const blockData = {
    "message0": "Add option %1 Type %5 %6 Name %2 Description %3 Required %4",
    "args0": [
        {
            "type":"input_dummy"
        },
        {
            "type":"input_value",
            "name":"NAME",
            "check":"String"
        },
        {
            "type":"input_value",
            "name":"DESC",
            "check":"String"
        },
        {
            "type":"input_value",
            "name":"REQUIRED",
            "check":"Boolean"
        },
      {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "True/False",
          "5"
        ],
        [
          "User",
          "6"
        ],
        [
          "Channel",
          "7"
        ],
        [
          "Role",
          "8"
        ],
        [
          "User or Role",
          "9"
        ],
        [
          "Attachment",
          "11"
        ]
      ]
    },
    {
      "type":"input_dummy"
    },
    ],
    "colour": "#366ab3",
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

Blockly.JavaScript[blockName] = function(block){
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const desc = Blockly.JavaScript.valueToCode(block, "DESC", Blockly.JavaScript.ORDER_ATOMIC);
    const required = Blockly.JavaScript.valueToCode(block, "REQUIRED", Blockly.JavaScript.ORDER_ATOMIC);
  const type = block.getFieldValue("TYPE");
    const code = `{
      type: ${type},
			name: ${name},
			description: ${desc},
			required: ${required||false}
},`;
    return code;
};