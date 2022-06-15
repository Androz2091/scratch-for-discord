import * as Blockly from "blockly/core";

import { registerRestrictions } from "../../../restrictions";


const blockName = "banned_objects"

const blockData = {
    "type": "banned_objects",
    "message0": "%1 %2",
    "args0": [
        {
            "type": "field_label_serializable",
            "name": "TEXT",
            "text": "Get the banned member's"
        },
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
                    "Reason",
                    "REASON"
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



Blockly.JavaScript['banned_objects'] = function (block) {
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
        case "REASON":
            code = `ban.reason`
            break;
    }
    //     if (dropdown_options == "ID"){code = `String(ban.guild.id)`}
    //     if (dropdown_options == "NAME"){code = `String(ban.guild.name)`}
    //     if (dropdown_options == "USERNAME"){code = `String(ban.user.username)`}
    //     if (dropdown_options == "DISCRIMINATOR"){code = `String(ban.user.discriminator)`}
    //     if (dropdown_options == "MEMBER_ID"){code = `String(ban.user.id)`}
    //     if (dropdown_options == "REASON"){code = `String(ban.reason)`}

    return [code, Blockly.JavaScript.ORDER_NONE];
};


registerRestrictions(blockName, [

    {
        type: 'hasparent',
        message: 'RES_MUST_BE_IN_BANNED_EVENT',
        types: [
            'banned_event'
        ]


    }


]);