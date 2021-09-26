import * as Blockly from "blockly";


const blockName = "ec_name";

const blockData = {
    "message0": "%1 of created emoji ",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "INFO",
            "options": [
                [ "name", "name" ],
                [ "ID", "id" ],
                [ "author", "author" ],
                [ "animated", "animated" ],
                [ "available", "available" ],
                [ "deletable", "deletable" ],
                [ "deleted", "deleted" ],
                [ "url", "url" ],
            ]
        },
    ],
    "output": "String",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const info = block.getFieldValue("INFO");
    const code = [`emoji.${info}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

