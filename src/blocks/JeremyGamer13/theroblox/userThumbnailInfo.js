// roblox_user_thumbnail

import Blockly from "blockly/core";

const blockName = "jg_roblox_user_thumbnail_info";

const blockData = {
    "message0": "roblox user thumbnail %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "request state",
                    'state'
                ],
                [
                    "url",
                    'imageUrl'
                ]
            ],
        }

    ],
    "colour": 0,
    "output": "String",
    "tooltip": "Get thumbnail information from a roblox account's profile.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const type = block.getFieldValue("TYPE");
    const code = [`roblox_user_thumbnail[0].${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};