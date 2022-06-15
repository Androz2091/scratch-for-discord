import * as Blockly from "blockly/core";

import { registerRestrictions } from "../../../restrictions";

const blockName = "unbanned_objects"

const blockData = {
    "type": "unbanned_objects",
    "message0": "Get the unbanned member's %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "options",
            "options": [
                [
                    "server id",
                    "ID"
                ],
                [
                    "server name",
                    "NAME"
                ],
                [
                    "username",
                    "USERNAME"
                ],
                [
                    "discriminator",
                    "DISCRIMINATOR"
                ],
                [
                    "id",
                    "MEMBER_ID"
                ],
                [
                    "tag",
                    "TAG"
                ]
            ]
        }
    ],
    "colour": "#2AC395",
    "output": null,
    "tooltip": "",
    "helpUrl": ""
}


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};



Blockly.JavaScript['unbanned_objects'] = function (block) {
    var dropdown_options = block.getFieldValue('options');
    var code = ``;

    switch (dropdown_options) {
        case "ID":
            code = `String(ban.guild.id)`
            break;
        case "NAME":
            code = `ban.guild.name`
            break;
        case "USERNAME":
            code = `ban.user.username`
            break;
        case "DISCRIMINATOR":
            code = `ban.user.discriminator`
            break;
        case "MEMBER_ID":
            code = `String(ban.user.id)`
            break;
        case "TAG":
            code = 'ban.user.tag'
            break;
    }
    //    if (dropdown_options == "ID") { code = `String(unban.guild.id)` }
    //    if (dropdown_options == "NAME") { code = `String(unban.guild.name)` }
    //    if (dropdown_options == "USERNAME") { code = `String(unban.user.username)` }
    //   if (dropdown_options == "DISCRIMINATOR") { code = `String(unban.user.discriminator)` }
    //   if (dropdown_options == "MEMBER_ID") { code = `String(unban.user.id)` }

    return [code, Blockly.JavaScript.ORDER_NONE];
};

registerRestrictions(blockName, [

    {
        type: 'hasparent',
        message: 'RES_MUST_BE_IN_UNBANNED_EVENT',
        types: [
            'unbanned_event'
        ]


    }


]);