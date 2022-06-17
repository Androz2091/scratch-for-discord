import * as Blockly from "blockly/core";
import "@blockly/field-grid-dropdown";
import { registerRestrictions } from "../../../restrictions";


const blockName = 'lime_scheduled_event_attributes'

const blockData = {
    "type": "lime_scheduled_event_attributes",
    "message0": "%1 %2",
    "args0": [
        {
            "type": "field_label_serializable",
            "name": "text",
            "text": "Get the scheduled event's"
        },
        {
            "type": "field_grid_dropdown",
            "name": "dropdown",
            "options": [
                [
                    "channel",
                    "CHANNEL"
                ],
                [
                    "channel ID",
                    "CHANNEL_ID"
                ],
                [
                    "creation time",
                    "CREATED_AT"
                ],
                [
                    "creation timestamp",
                    "CREATED_TIMESTAMP"
                ],
                [
                    "creator",
                    "CREATOR"
                ],
                [
                    "creator ID",
                    "CREATOR_ID"
                ],
                [
                    "description",
                    "DESCRIPTION"
                ],
                [
                    "entity ID",
                    "ENTITY_ID"
                ],
                [
                    "entity metadata",
                    "METADATA"
                ],
                [
                    "enity type",
                    "ENTITY_TYPE"
                ],
                [
                    "guild",
                    "GUILD"
                ],
                [
                    "guild ID",
                    "GUILD_ID"
                ],
                [
                    "ID",
                    "ID"
                ],
                [
                    "image",
                    "IMAGE"
                ],
                [
                    "privacy level",
                    "PRIVACY"
                ],
                [
                    "schedule end",
                    "END"
                ],
                [
                    "schedule's end timestamp",
                    "END_TIMESTAMP"
                ],
                [
                    "schedule start",
                    "START"
                ],
                [
                    "schedule's start timestamp",
                    "START_TIMESTAMP"
                ],
                [
                    "status",
                    "STATUS"
                ],
                [
                    "url",
                    "URL"
                ],
                [
                    "user count",
                    "USER_COUNT"
                ],
                [
                    "name",
                    "NAME"
                ]
            ]
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": '#AF88E2',
    "tooltip": "Get the scheduled event attributes with this block!",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }, onchange: function (event) {
        event
        var dropdown = this.getFieldValue('dropdown')
        switch (dropdown) {

            case 'CHANNEL':
                this.setColour('#a55b80')
                this.setOutput(true, 'Channel')
                break;

            case 'CHANNEL_ID':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'CREATED_AT':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'CREATED_TIMESTAMP':
                this.setColour('#AF88E2')
                this.setOutput(true, 'Number')
                break;

            case 'CREATOR':
                this.setColour('#a55b80')
                this.setOutput(true, 'Member')
                break;

            case 'CREATOR_ID':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'DESCRIPTION':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'ENTITY_ID':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'METADATA':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'ENTITY_TYPE':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'GUILD':
                this.setColour('#AF88E2')
                this.setOutput(true, 'Server')
                break;

            case 'GUILD_ID':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'ID':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'IMAGE':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'PRIVACY':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'END':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'END_TIMESTAMP':
                this.setColour('#AF88E2')
                this.setOutput(true, 'Number')
                break;

            case 'START':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'START_TIMESTAMP':
                this.setColour('#AF88E2')
                this.setOutput(true, 'Number')
                break;

            case 'STATUS':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'URL':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

            case 'USER_COUNT':
                this.setColour('#AF88E2')
                this.setOutput(true, 'Number')
                break;

            case 'NAME':
                this.setColour('#AF88E2')
                this.setOutput(true, 'String')
                break;

        }
    }
};

Blockly.JavaScript['lime_scheduled_event_attributes'] = function (block) {
    var dropdown = block.getFieldValue('dropdown');
    var code = ``

    switch (dropdown) {

        case 'CHANNEL':
            code = 'scheduledEvent.channel'
            break;

        case 'CHANNEL_ID':
            code = 'scheduledEvent.channelID'
            break;

        case 'CREATED_AT':
            code = 'scheduledEvent.createdAt'
            break;

        case 'CREATED_TIMESTAMP':
            code = 'scheduledEvent.createdTimestamp'
            break;

        case 'CREATOR':
            code = 'scheduledEvent.creator'
            break;

        case 'CREATOR_ID':
            code = 'scheduledEvent.creatorId'
            break;

        case 'DESCRIPTION':
            code = 'scheduledEvent.description'
            break;

        case 'ENTITY_ID':
            code = 'scheduledEvent.entityId'
            break;

        case 'METADATA':
            code = 'scheduledEvent.entityMetadata'
            break;

        case 'ENTITY_TYPE':
            code = 'scheduledEvent.entityType'
            break;

        case 'GUILD':
            code = 'scheduledEvent.guild'
            break;

        case 'GUILD_ID':
            code = 'scheduledEvent.guildID'
            break;

        case 'ID':
            code = 'scheduledEvent.id'
            break;

        case 'IMAGE':
            code = 'scheduledEvent.image'
            break;

        case 'PRIVACY':
            code = 'scheduledEvent.privacyLevel'
            break;

        case 'END':
            code = 'scheduledEvent.scheduledEndAt'
            break;

        case 'END_TIMESTAMP':
            code = 'scheduledEvent.scheduledEndTimestamp'
            break;

        case 'START':
            code = 'scheduledEvent.scheduledStartAt'
            break;

        case 'START_TIMESTAMP':
            code = 'scheduledEvent.scheduledStartTimestamp'
            break;

        case 'STATUS':
            code = 'scheduledEvent.status'
            break;

        case 'URL':
            code = 'scheduledEvent.url'
            break;

        case 'USER_COUNT':
            code = 'scheduledEvent.userCount'
            break;

        case 'NAME':
            code = 'scheduledEvent.name'



    }


    return [code, Blockly.JavaScript.ORDER_NONE];
};

registerRestrictions(blockName, [

    {
        type: 'hasparent',
        message: 'RES_MUST_BE_IN_EVENT_EVENT',
        types: [
            'lime_guild_sheduled_events_create',
            'lime_guild_sheduled_events_remove'

        ]


    }


]);
