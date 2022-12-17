import Blockly from "blockly/core";

const blockName = "is_a_number_or_string";

const blockData = {
    "message0": "%1 is a %2",
    "args0": [
    {
        "type": "input_value",
        "name": "STRING",
        "check": [ "Number", "String" ],
    },
    {
        "type": "field_dropdown",
        "name": "DATA_TYPE",
        "options": [
            [
              "number", 
              "NUMBER"
            ],
            [
                  "string",
                  "STRING"
              ],
            ]
    }
    ],
    "output": "Boolean",
    "colour": "#D14081",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const dataType = block.getFieldValue("DATA_TYPE");
    const code = Blockly.JavaScript.valueToCode(block, "STRING", Blockly.JavaScript.ORDER_ATOMIC);
  if (dataType == "NUMBER") {
    return [`typeof (${code}) == "number"`, Blockly.JavaScript.ORDER_NONE ];
  } else if (dataType == "STRING") {
    return [`typeof (${code}) == "string"`, Blockly.JavaScript.ORDER_NONE ];
  }
};
