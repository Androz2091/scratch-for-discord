import * as Blockly from "blockly";


const blockName = "su_name";

const blockData = {
    "message0": "%1 of %2 ",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "INFO",
            "options": [
                [ "name", "name" ],
                [ "description", "description" ],
                [ "ID", "id" ],
                [ "author", "user" ],
                [ "available", "available" ],
                [ "url", "url" ],
                [ "type", "type" ],
                [ "tags", "tags" ],
                [ "type", "type" ],
            ]
        },
        {
            "type": "field_dropdown",
            "name": "STICKER",
            "options": [
                [ "new sticker", "newSticker" ],
                [ "old sticker", "oldSticker" ],
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
    const sticker = block.getFieldValue("STICKER");
    const code = [`${sticker}.${info}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

