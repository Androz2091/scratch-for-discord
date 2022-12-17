import * as Blockly from "blockly";


const blockName = "ru_name";

const blockData = {
    "message0": "%2 of %1 ",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "ROLE",
            "options": [
                [ "new role", "newRole" ],
                [ "old role", "oldRole" ],
            ]
        },
        {
            "type": "field_dropdown",
            "name": "INFO",
            "options": [
                [ "name", "name" ],
                [ "ID", "id" ],
                [ "hoisted", "hoist" ],
                [ "mentionable", "mentionable" ],
                [ "hex color", "hexColor" ],
                [ "color", "color" ],
                [ "position", "position" ],
                [ "deleted", "deleted" ],
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
    const role = block.getFieldValue("ROLE");
    const code = [`${role}.${info}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

