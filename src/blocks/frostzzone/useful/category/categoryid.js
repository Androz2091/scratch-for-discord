import Blockly from "blockly/core";

const blockName = "frost_category_id";

const blockData = {
    "message0": "Category %1 ID",
    "args0": [
    {
        "type": "input_value",
        "name": "STRING",
        "check": "Category"
    },
      {
        "type": "field_dropdown",
        "name": "TYPE",
        "options": [
          [
            "ID",
            "id"
          ],
          [
            "Name",
            "name"
          ],
          [
            "Position",
            "position"
          ],
          [
            "Guild",
            "guild"
          ],
          [
            "Guild ID",
            "guild.id"
          ],
          [
            "Created at (date)"
          ]
        ]
      }
    ],
    "output": "Number",
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
    const code = Blockly.JavaScript.valueToCode(block, "STRING", Blockly.JavaScript.ORDER_ATOMIC);
    return [`${code}.id`, Blockly.JavaScript.ORDER_NONE ];
};
