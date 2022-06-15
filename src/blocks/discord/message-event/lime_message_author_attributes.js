import Blockly from "blockly/core";
import "@blockly/field-grid-dropdown";

const blockName = 'lime_msg_author_attributes'

const blockData = {
    "type": "lime_msg_author_attributes",
    "message0": "%1 %2",
    "args0": [
        {
            "type": "field_label_serializable",
            "name": "TEXT",
            "text": "Get message author"
        },
        {
            "type": "field_grid_dropdown",
            "name": "dropdown",
            "options": [
                [
                    "avatar",
                    "AVATAR"
                ],
                [
                    "banner",
                    "BANNER"
                ],
                [
                    "bot?",
                    "BOT"
                ],
                [
                    "creation date",
                    "CREATED_AT"
                ],
                [
                    "creation date timestamp",
                    "CREATED_AT_TIMESTAMP"
                ],
                [
                    "default avatar URL",
                    "DFLT_AVATAR_URL"
                ],
                [
                    "discriminator",
                    "DISCRIMINATOR"
                ],
                [
                    "flags",
                    "FLAGS"
                ],
                [
                    "id",
                    "ID"
                ],
                [
                    "system bot?",
                    "SYSTEM"
                ],
                [
                    "tag",
                    "TAG"
                ],
                [
                    "Username",
                    "USERNAME"
                ]
            ]
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": '#4C97FF',
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }, onchange: function (event) {
        event
        var dropdown = this.getFieldValue('dropdown')
        switch (dropdown) {

            case 'AVATAR':
                this.setFieldValue('Get message author\'s', 'TEXT')
                this.setOutput(true, 'String')
                break;

            case 'BANNER':
                this.setFieldValue('Get message author\'s', 'TEXT')
                this.setOutput(true, 'String')
                break;

            case 'BOT':
                this.setFieldValue('Is message author a', 'TEXT')
                this.setOutput(true, 'Boolean')
                break;

            case 'CREATED_AT':
                this.setFieldValue('Get message author\'s', 'TEXT')
                this.setOutput(true, 'String')
                break;

            case 'CREATED_AT_TIMESTAMP':
                this.setFieldValue('Get message author\'s', 'TEXT')
                this.setOutput(true, 'Number')
                break;

            case 'DFLT_AVATAR_URL':
                this.setFieldValue('Get message author\'s', 'TEXT')
                this.setOutput(true, 'String')
                break;

            case 'DISCRIMINATOR':
                this.setFieldValue('Get message author\'s', 'TEXT')
                this.setOutput(true, 'String')
                break;

            case 'FLAGS':
                this.setFieldValue('Get message author\'s', 'TEXT')
                this.setOutput(true, 'String')
                break;

            case 'ID':
                this.setFieldValue('Get message author\'s', 'TEXT')
                this.setOutput(true, 'String')
                break;

            case 'SYSTEM':
                this.setFieldValue('Is message author a', 'TEXT')
                this.setOutput(true, 'Boolean')
                break;

            case 'TAG':
                this.setFieldValue('Get message author\'s', 'TEXT')
                this.setOutput(true, 'String')
                break;

            case 'USERNAME':
                this.setFieldValue('Get message author\'s', 'TEXT')
                this.setOutput(true, 'String')
                break;

        }


    }
};

Blockly.JavaScript['lime_msg_author_attributes'] = function (block) {
    var dropdown = block.getFieldValue('dropdown')
    var code = ''


    switch (dropdown) {

        case 'AVATAR':
            code = 's4dmessage.author.avatar'
            break;

        case 'BANNER':
            code = 's4dmessage.author.banner'
            break;

        case 'BOT':
            code = 's4dmessage.author.bot'
            break;

        case 'CREATED_AT':
            code = 's4dmessage.author.createdAt'
            break;

        case 'CREATED_AT_TIMESTAMP':
            code = 's4dmessage.author.createdTimestamp'
            break;

        case 'DFLT_AVATAR_URL':
            code = 's4dmessage.author.defaultAvatarURL'
            break;

        case 'DISCRIMINATOR':
            code = 's4dmessage.author.discriminator'
            break;

        case 'FLAGS':
            code = 's4dmessage.author.flags'
            break;

        case 'ID':
            code = 's4dmessage.author.id'
            break;

        case 'SYSTEM':
            code = 's4dmessage.author.system'
            break;

        case 'TAG':
            code = 's4dmessage.author.tag'
            break;

        case 'USERNAME':
            code = 's4dmessage.author.username'
            break;

    }


    return [code, Blockly.JavaScript.ORDER_NONE];
};