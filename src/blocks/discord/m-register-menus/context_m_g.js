import * as Blockly from "blockly/core";


const blockName = "register_c_m_g";

const blockData = {
    "message0": "name %1 type %2",
    "args0": [
      {
          "type": "input_value",
          "name": "NAME",
          "check": [ "String" ]
      },
      {
        "type": "field_dropdown",
        "name": "SEARCH",
        "options": [
            [
                "message",
                "3"
            ],
            [
                "user",
                "2"
            ]
        ],

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
  const searchType = block.getFieldValue("SEARCH");
  const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4d.client.application?.commands.create({ \n name: ${name}, \n type: ${searchType} \n }) \n`;
    return code;

};
