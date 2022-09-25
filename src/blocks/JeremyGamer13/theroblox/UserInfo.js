// roblox_user_info

import Blockly from "blockly/core";

const blockName = "jg_roblox_user_info";

const blockData = {
    "message0": "roblox user %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "username",
                    'username'
                ],
                [
                    "display name",
                    'displayName'
                ],
                [
                    "\"about\" bio",
                    'blurb'
                ],
                [
                    "join date",
                    'joinDate'
                ],
                [
                    "account age",
                    'age'
                ],
                [
                    "friend count",
                    'friendCount'
                ],
                [
                    "follower count",
                    'followerCount'
                ],
                [
                    "following count",
                    'followingCount'
                ],
                [
                    "list of old usernames",
                    'oldNames'
                ],
                [
                    "is banned?",
                    'isBanned'
                ]
            ],
        }

    ],
    "colour": 0,
    "output": null,
    "tooltip": "Get player information from a roblox account's profile.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const type = block.getFieldValue("TYPE");
    const code = [`roblox_user_info.${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};