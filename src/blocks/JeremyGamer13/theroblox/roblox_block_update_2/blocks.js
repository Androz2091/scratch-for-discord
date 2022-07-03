import Blockly from "blockly/core";
const blockNames = [
    "jg_roblox_U2_login_with_security_cookie",
    "jg_roblox_U2_currently_logged_in_users",
    "jg_roblox_U2_wear_list_of_assets",
    "jg_roblox_U2_set_avatar_type",
    "jg_roblox_U2_get_users_avatar_asset_ids",
    "jg_roblox_U2_users_avatar_asset_ids",
    "jg_roblox_U2_remove_asset_id_from_avatar",
    "jg_roblox_U2_accept_friend_request",
    "jg_roblox_U2_block_user",
    "jg_roblox_U2_unblock_user",
    "jg_roblox_U2_decline_all_friend_requests",
    "jg_roblox_U2_decline_friend_request",
]
Blockly.Blocks[blockNames[0]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "login to roblox with security cookie %1 then %2 %3",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "COOKIE",
                        "check": ["String", "var", "Env"]
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "THEN"
                    }

                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Login to the roblox account that has this cookie, then run the blocks below. If your bot's code is public, hide the security cookie in a process.env block! Any blocks that require login are marked with a star.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[0]] = function (block) {
    const cookie = Blockly.JavaScript.valueToCode(block, "COOKIE", Blockly.JavaScript.ORDER_ATOMIC);
    const then = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `S4D_APP_NOBLOX.setCookie(String(${cookie})).then(async function(roblox_currentUser) {
  ${then}
})
`;
    return code;
};
Blockly.Blocks[blockNames[1]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%2 currently logged in users %1",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "user ID",
                                'UserID'
                            ],
                            [
                                "username",
                                'UserName'
                            ],
                            [
                                "robux balance",
                                'RobuxBalance'
                            ],
                            [
                                "thumbnail url",
                                'ThumbnailUrl'
                            ],
                            [
                                "a premium member?",
                                'IsPremium'
                            ],
                            [
                                "a builders club member?",
                                'IsAnyBuildersClubMember'
                            ]
                        ],
                    },
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    }
                ],
                "output": null,
                "colour": 10,
                "tooltip": "Get information about the currently logged in user.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[1]] = function (block) {
    const type = block.getFieldValue("TYPE")
    const code = [`roblox_user_info.${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks[blockNames[2]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 wear list of assets %2",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "input_value",
                        "name": "LIST",
                        "check": ["Array", "List"]
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Wear the list of asset IDs. The list needs to be the IDs of the assets as numbers, not text.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[2]] = function (block) {
    const list = Blockly.JavaScript.valueToCode(block, "LIST", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`S4D_APP_NOBLOX.setWearingAssets(${list})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks[blockNames[3]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 set current avatar to type %2",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "R6",
                                '"R6"'
                            ],
                            [
                                "R15",
                                '"R15"'
                            ]
                        ],
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Set the current avatar type.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[3]] = function (block) {
    const type = block.getFieldValue("TYPE")
    const code = [`S4D_APP_NOBLOX.setPlayerAvatarType(${type})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks[blockNames[4]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "get user ID %1s currently wearing asset IDs then %2 %3",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "USER",
                        "check": ["String", "var", "Env"]
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "THEN"
                    }

                ],
                "colour": 0,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Gets the users currently wearing asset IDs in a list, and runs the blocks below.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[4]] = function (block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const then = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `S4D_APP_NOBLOX.currentlyWearing(Number(${user})).then(async (roblox_currentlywearing) => {
      ${then}
    })
`;
    return code;
};
Blockly.Blocks[blockNames[5]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "roblox users currently wearing asset IDs",
                "args0": [],
                "output": ["Array", "List"],
                "colour": 0,
                "tooltip": "A list of all of the Asset IDs the user specified is wearing.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[5]] = function () {
    const code = [`roblox_currentlywearing.assetIds`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
Blockly.Blocks[blockNames[6]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 remove asset ID %2 from avatar",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "input_value",
                        "name": "ASSET",
                        "check": "Number"
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Remove the asset ID from the avatar.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[6]] = function (block) {
    const asset = Blockly.JavaScript.valueToCode(block, "ASSET", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `S4D_APP_NOBLOX.removeAssetId(Number(${asset}))`
    return code;
};
Blockly.Blocks[blockNames[7]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 accept friend request from user ID %2",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "input_value",
                        "name": "USER",
                        "check": "Number"
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Accept a user's friend request.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[7]] = function (block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `S4D_APP_NOBLOX.acceptFriendRequest(Number(${user}))`
    return code;
};
Blockly.Blocks[blockNames[8]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 block user ID %2",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "input_value",
                        "name": "USER",
                        "check": "Number"
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Block a user.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[8]] = function (block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `S4D_APP_NOBLOX.block(Number(${user}))`
    return code;
};
Blockly.Blocks[blockNames[9]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 unblock user ID %2",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "input_value",
                        "name": "USER",
                        "check": "Number"
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Unblock a user.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[9]] = function (block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `S4D_APP_NOBLOX.unblock(Number(${user}))`
    return code;
};
Blockly.Blocks[blockNames[10]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 decline all friend requests",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Decline all incoming friend requests.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[10]] = function () {
    const code = `S4D_APP_NOBLOX.declineAllFriendRequests()`
    return code;
};
Blockly.Blocks[blockNames[11]] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 decline friend request from user ID %2",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "input_value",
                        "name": "USER",
                        "check": "Number"
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Decline a user's friend request.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript[blockNames[11]] = function (block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `S4D_APP_NOBLOX.declineFriendRequest(Number(${user}))`
    return code;
};
Blockly.Blocks["jg_roblox_U2_follow_user_id"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 follow user ID %2",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "input_value",
                        "name": "USER",
                        "check": "Number"
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Follow a user.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_roblox_U2_follow_user_id"] = function (block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `S4D_APP_NOBLOX.follow(Number(${user}))`
    return code;
};
Blockly.Blocks["jg_roblox_U2_unfollow_user_id"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 unfollow user ID %2",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "input_value",
                        "name": "USER",
                        "check": "Number"
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Unfollow a user.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_roblox_U2_unfollow_user_id"] = function (block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `S4D_APP_NOBLOX.unfollow(Number(${user}))`
    return code;
};
Blockly.Blocks["jg_roblox_U2_send_message_to_user_id"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 send message to user ID %2 with subject %3 and body %4",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "input_value",
                        "name": "USER",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "SUBJECT",
                        "check": "String"
                    },
                    {
                        "type": "input_value",
                        "name": "BODY",
                        "check": "String"
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Send a message to a user. This uses Roblox messaging, not the Roblox chat.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_roblox_U2_send_message_to_user_id"] = function (block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const subject = Blockly.JavaScript.valueToCode(block, "SUBJECT", Blockly.JavaScript.ORDER_ATOMIC);
    const body = Blockly.JavaScript.valueToCode(block, "BODY", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `S4D_APP_NOBLOX.message(Number(${user}), String(${subject}), String(${body}))`
    return code;
};
// adcnieb
Blockly.Blocks["jg_roblox_U2_send_friend_request"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%1 send friend request to user ID %2",
                "args0": [
                    {
                        "type": "field_image",
                        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
                        "width": 15,
                        "height": 15,
                        "alt": "*",
                        "flipRtl": false
                    },
                    {
                        "type": "input_value",
                        "name": "USER",
                        "check": "Number"
                    }
                ],
                "colour": 10,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Send a friend request to a user.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_roblox_U2_send_friend_request"] = function (block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `S4D_APP_NOBLOX.sendFriendRequest(Number(${user}))`
    return code;
};
// adcnieb