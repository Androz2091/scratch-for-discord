import * as Blockly from "blockly";


const blockName = "permissions";

const blockData = {
    "message0": "%1 permission",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "INFO",
            "options": [
                [
                    "old",
                    "oldPermissions"
                ],
                [
                    "new",
                    "newPermissions"
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
    const info2 = block.getFieldValue("INFO");
    let info1 = info2.replace("'",'')
    let info = info1.replace("'","")
    const code = [`${info}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

