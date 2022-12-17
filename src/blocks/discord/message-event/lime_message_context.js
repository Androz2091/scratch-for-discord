import * as Blockly from "blockly/core";

const blockName = "lime_s4d_message_context"

const blockData = {
    "type": "lime_s4d_message_context",
    "message0": "%1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "dropdown",
            "options": [
                [
                    "received message",
                    "MESSAGE"
                ],
                [
                    "message channel",
                    "CHANNEL"
                ],
                [
                    "message server",
                    "SERVER"
                ],
                [
                    "message category",
                    "CATEGORY"
                ]
            ]
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": '#a55b80',
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

            case 'MESSAGE':
                this.setColour('#a55b80')
                this.setOutput(true, 'Message')
                break;

            case 'CHANNEL':
                this.setColour('#a55b80')
                this.setOutput(true, 'Channel')
                break;

            case 'SERVER':
                this.setColour('#D85E47')
                this.setOutput(true, 'Server')
                break;

            case 'CATEGORY':
                this.setColour("#a55b80")
                this.setOutput(true, 'Category')
                break;

        }
    }
};

Blockly.JavaScript['lime_s4d_message_context'] = function (block) {
    var dropdown = block.getFieldValue('dropdown');
    var code = ''

    switch (dropdown) {

        case 'MESSAGE':
            code = 's4dmessage'
            break;

        case 'CHANNEL':
            code = 's4dmessage.channel'
            break;

        case 'SERVER':
            code = 's4dmessage.guild'
            break;

        case 'CATEGORY':
            code = 's4dmessage.channel.parent'
            break;

    }

    return [code, Blockly.JavaScript.ORDER_NONE];
};