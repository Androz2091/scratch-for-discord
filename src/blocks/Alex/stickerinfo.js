import Blockly from "blockly/core";

const blockName = "info_of_sticker";

const blockData = {
"message0": "%1 of sticker %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "info",
      "options": [
        [
          "Name",
          "name"
        ],
        [
          "Description",
          "description"
        ],
        [
          "Image URL",
          "url"
        ],
        [
          "ID",
          "id"
        ], 
        [
          "Tags",
          "tags"
        ],
      ]
    },
    
    {
      "type": "input_value",
      "name": "sticker",
      "check": "Sticker"
    },

  ],
  "output": "String",
  "colour": "#02a836",
  "tooltip": "Gets the information from the sticker.",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const sticker = Blockly.JavaScript.valueToCode(block, "sticker", Blockly.JavaScript.ORDER_ATOMIC);
const info = block.getFieldValue("info");

    const code = [`${sticker}.${info}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
