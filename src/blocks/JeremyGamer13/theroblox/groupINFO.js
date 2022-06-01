// roblox_group_info

import Blockly from "blockly/core";

const blockName = "jg_roblox_group_info";

const blockData = {
    "message0": "roblox group %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "name",
                    'name'
                ],
                [
                    "description",
                    'description'
                ],
                [
                    "owner ID",
                    'owner.userId'
                ],
                [
                    "owner username",
                    'owner.username'
                ],
                [
                    "owner display name",
                    'owner.displayName'
                ],
                [
                    "current shout",
                    'shout.body'
                ],
                [
                    "current shouter ID",
                    'shout.poster.userId'
                ],
                [
                    "current shouter username",
                    'shout.poster.username'
                ],
                [
                    "current shouter display name",
                    'shout.poster.displayName'
                ],
                [
                    "member count",
                    'memberCount'
                ],
                [
                    "has public entry?",
                    'publicEntryAllowed'
                ]
            ],
        }

    ],
    "colour": 0,
    "output": null,
    "tooltip": "Get group information from a roblox group's ID.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const type = block.getFieldValue("TYPE");
    const code = [`roblox_group_info.${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};