mport * as Blockly from "blockly/core";


const blockName = "get_about";

const blockData = {
    "message0": "Get %1 from user %2",
    "args0": [
       {
        "type": "field_dropdown",
        "name": "SEARCH",
        "options": [
            [
                "Profile Picture",
                "icon_img"
            ],
            [
                "Comment Karma",
                "comment_karma"
            ],
           [
                "Creation Date (UTC)",
                "created_utc"
            ],
          [
                "Awarder Karma",
                "awarder_karma"
            ]
        ],
        },
      {
          "type": "input_value",
          "name": "NAME",
          "check": [ "String" ]
      },
     

    ],
    "colour": "#5ba58b",
    "output": "String",
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
