import * as Blockly from "blockly/core";


const blockName = "postVars";

const blockData = {
    "message0": "%1",
    "args0": [
       {
        "type": "field_dropdown",
        "name": "INFO",
        "options": [
            [
                "Post Title",
                "postTitle"
            ],
            [
                "Post Image",
                "postImg"
            ],
             [
                "Post URL",
                "postUrl"
            ],
           [
                "Post Upvotes",
                "postUpvotes"
            ],
            [
                "Post Comments",
                "postComs"
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
  const code = [`${stats}`, Blockly.JavaScript.ORDER_NONE]

    return code;

};
