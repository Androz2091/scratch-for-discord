import * as Blockly from "blockly/core";


const blockName = "about_user";

const blockData = {
    "message0": "%1",
    "args0": [
       {
        "type": "field_dropdown",
        "name": "INFO",
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
                "Total Karma",
                "total_karma"
            ],
           [
                "Awarder Karma",
                "awarder_karma"
            ],
            [
                "Creation Date (UTC)",
                "created_utc"
            ]
          
        ],
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
  const stats = block.getFieldValue("INFO");
  const code = [`info.data.${stats}`, Blockly.JavaScript.ORDER_NONE]

    return code;

};
