import * as Blockly from "blockly/core";

const blockName = 'lime_s4d_message_attributes_content_author_id_timestamp'

const blockData = {
    "type": "lime_s4d_message_attributes_content_author_id_timestamp",
    "message0": "%1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "dropdown",
            "options": [
                [
                    "message content",
                    "CONTENT"
                ],
                [
                    "message ID",
                    "ID"
                ],
                [
                    "message timestamp",
                    "TIME"
                ],
                [
                    "message author",
                    "AUTHOR"
                ],
                [
                    "message member",
                    "MEMBER"
                ],
                [
                    "mentioned member",
                    "MENTION"
                ],
                [
                    "mentioned channel",
                    "CHANNEL"
                ],
                [
                    "mentioned role",
                    "ROLE"
                ]
            ]
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": '#5BA58C',
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }, onchange: function () {

        var dropdown = this.getFieldValue('dropdown')
        switch (dropdown) {
            case 'CONTENT':
                this.setColour('#5BA58C')
                this.setOutput(true, 'String')
                break;
            case 'ID':
                this.setColour('#5BA58C')
                this.setOutput(true, 'String')
                break;

            case 'TIME':
                this.setColour('#5BA58C')
                this.setOutput(true, 'String')
                break;

            case 'AUTHOR':
                this.setOutput(true, 'Member')
                this.setColour('#187795')
                break;

            case 'MEMBER':
                this.setOutput(true, 'Member')
                this.setColour('#187795')
                break;

            case 'MENTION':
                this.setOutput(true, 'Member')
                this.setColour('#187795')
                break;

            case 'CHANNEL':
                this.setOutput(true, 'Channel')
                this.setColour('#187795')
                break;

            case 'ROLE':
                this.setOutput(true, 'Role')
                this.setColour('#187795')
                break;
        }
    }
};

Blockly.JavaScript[blockName] = function (block) {
    var dropdown = block.getFieldValue('dropdown');
    var code = ''

    switch (dropdown) {

        case 'CONTENT':
            code = 's4dmessage.content'
            break;
        case 'ID':
            code = 's4dmessage.id'
            break;

        case 'TIME':
            code = 's4dmessage.createdTimestamp'
            break;

        case 'AUTHOR':
            code = 's4dmessage.author'
            break;

        case 'MEMBER':
            code = 's4dmessage.member.user'
            break;

        case 'MENTION':
            code = 's4dmessage.mentions.members.first().user'
            break;

        case 'CHANNEL':
            code = 's4dmessage.mentions.channels.first()'
            break;

        case 'ROLE':
            code = 's4dmessage.mentions.roles.first()'
            break;
    }


    return [code, Blockly.JavaScript.ORDER_NONE];
};