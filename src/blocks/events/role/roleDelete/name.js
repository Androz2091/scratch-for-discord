import * as Blockly from "blockly";


const blockName = "rd_name";

const blockData = {
    "message0": "%1 of deleted role ",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "INFO",
            "options": [
                [
                    "name",
                    "name"
                ],
                [
                    "ID",
                    "id"
                ],
                [
                    "hoisted",
                    "hoist"
                ],
                [
                    "mentionable",
                    "mentionable"
                ]
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
    const code = [`role.${info}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

