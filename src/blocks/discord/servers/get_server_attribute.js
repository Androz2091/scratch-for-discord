

import * as Blockly from "blockly/core";
import '@blockly/field-grid-dropdown';
const blockName = "server_attributes"

const blockData = {
    "type": "server_attributes",
    "message0": "On the server %1 get the %2",
    "args0": [
        {
            "type": "input_value",
            "name": "server"
        },
        {
            "type": "field_grid_dropdown",
            "name": "attributes",
            "options": [
                [
                    "AFK channel",
                    "AFK_CHANNEL"
                ],
                [
                    "AFK channel ID",
                    "AFK_CHANNEL_ID"
                ],
                [
                    "AFK timeout",
                    "AFK_TIMEOUT"
                ],
                [
                    "banner",
                    "BANNER"
                ],
                [
                    "creation date",
                    "CREATED_AT"
                ],
                [
                    "default message notifications",
                    "DEFAULT_MSG_NOTIF"
                ],
                [
                    "description",
                    "DESCRIPTION"
                ],
                [
                    "discovery splash",
                    "DISCOVERY_SPLASH"
                ],
                [
                    "explicit content filter",
                    "EXPLICIT_CONTENT_FILTER"
                ],
                [
                    "icon",
                    "ICON"
                ],
                [
                    "ID",
                    "ID"
                ],
                [
                    "maximum Bitrate",
                    "MAX_BITRATE"
                ],
                [
                    "maximum members",
                    "MAX_MEMBERS"
                ],
                [
                    "maximum presences",
                    "MAX_PRESENCES"
                ],
                [
                    "member count",
                    "MEMBER_COUNT"
                ],
                [
                    "mfa level",
                    "MFA_LEVEL"
                ],
                [
                    "name",
                    "NAME"
                ],
                [
                    "name acronym",
                    "NAME_ACRONYM"
                ],
                [
                    "NSFW level",
                    "NSFW_LEVEL"
                ],
                [
                    "owner ID",
                    "OWNER_ID"
                ],
                [
                    "partnered",
                    "PARTNERED"
                ],
                [
                    "prefered locale",
                    "PREFERED_LOCALE"
                ],
                [
                    "boost progress bar enabled",
                    "PREMIUM_PROGRESS_BAR_ENABLED"
                ],
                [
                    "number of boosts",
                    "SUBSCRIPTION_COUNT"
                ], [
                    "boost level",
                    "BOOST_LEVEL"
                ],
                [
                    "rules channel",
                    "RULES_CHANNEL"
                ],
                [
                    "rules channel ID",
                    "RULES_CHANNEL_ID"
                ],
                [
                    "system channel",
                    "SYS_CHANNEL"
                ],
                [
                    "system channel ID",
                    "SYS_CHANNEL_ID"
                ],
                [
                    "verification level",
                    "VERFIF_LEVEL"
                ],
                [
                    "verified status",
                    "VERIFIED"
                ]
            ]
        }
    ],
    "inputsInline": true,
    "colour": "#e07e6c",
    "output": null,
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['server_attributes'] = function (block) {
    var server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
    var attributes = block.getFieldValue('attributes');
    var code = '';

    switch (attributes) {
        case 'AFK_CHANNEL':
            code = `${server}.afkChannel`
            break;

        case 'AFK_CHANNEL_ID':
            code = `${server}.afkChannelId`
            break;

        case 'AFK_TIMEOUT':
            code = `${server}.afkTimeout`
            break;

        case 'BANNER':
            code = `${server}.banner`
            break;

        case 'CREATED_AT':
            code = `${server}.createdAt`
            break;

        case 'super idol':
            code = `${server}.banner`
            break;

        case 'DEFAULT_MSG_NOTIF':
            code = `${server}.defaultMessageNotifications`
            break; //in bad

        case 'DESCRIPTION':
            code = `${server}.description`
            break;

        case 'DISCOVERY_SPLASH':
            code = `${server}.discoverySplash`
            break;

        case 'EXPLICIT_CONTENT_FILTER':
            code = `${server}.explicitContentFilter`
            break;

        case 'ID':
            code = `${server}.id`
            break;

        case 'ICON':
            code = `${server}.icon`
            break;

        case 'MAX_BITRATE':
            code = `${server}.maximumBitratemaximumMembers`
            break;

        case 'MAX_MEMBERS':
            code = `${server}.maximumMembers`
            break;

        case 'MAX_PRESENCES':
            code = `${server}.maximumPresences`
            break;

        case 'MEMBER_COUNT':
            code = `${server}.memberCount`
            break;

        case 'MFA_LEVEL':
            code = `${server}.mfaLevel`
            break;

        case 'NAME':
            code = `${server}.name`
            break;

        case 'NAME_ACRONYM':
            code = `${server}.nameAcronym`
            break;

        case 'NSFW_LEVEL':
            code = `${server}.nsfwLevel`
            break;

        case 'OWNER_ID':
            code = `${server}.ownerId`
            break;

        case 'PARTNERED':
            code = `${server}.partnered`
            break;

        case 'PREFERED_LOCALE':
            code = `${server}.preferredLocale`
            break;

        case 'PREMIUM_PROGRESS_BAR_ENABLED':
            code = `${server}.premiumProgressBarEnabled`
            break;

        case 'SUBSCRIPTION_COUNT':
            code = `${server}.premiumSubscriptionCount`
            break;

        case 'RULES_CHANNEL':
            code = `${server}.rulesChannel`
            break;

        case 'RULES_CHANNEL_ID':
            code = `${server}.rulesChannelId`
            break;

        case 'BOOST_LEVEL':
            code = `${server}.premiumTier`
            break;

        case 'SYS_CHANNEL':
            code = `${server}.systemChannel`
            break;

        case 'SYS_CHANNEL_ID':
            code = `${server}.systemChannelId`
            break;

        case 'VERIF_LEVEL':
            code = `${server}.verificationLevel`
            break;

        case 'VERIFIED':
            code = `${server}.verified`
            break;





















    }



    return [code, Blockly.JavaScript.ORDER_NONE];
};