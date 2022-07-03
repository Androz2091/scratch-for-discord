import Blockly from "blockly/core";

const blockName = "member_channel_perms"

const blockData = {
    "type": "member_channel_perms",
    "message0": "member %1 has permission %2 %3 on channel %4",
    "args0": [
        {
            "type": "input_value",
            "name": "member"
        },
        {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                [
                    "create instant invite",
                    "CREATE_INSTANT_INVITE"
                ],
                [
                    "view channel",
                    "VIEW_CHANNEL"
                ],
                [
                    "send messages",
                    "SEND_MESSAGES"
                ],
                [
                    "send tts messages",
                    "SEND_TTS_MESSAGES"
                ],
                [
                    "manage messages",
                    "MANAGE_MESSAGES"
                ],
                [
                    "embed links",
                    "EMBED_LINKS"
                ],
                [
                    "attatch files",
                    "ATTACH_FILES"
                ],
                [
                    "read message history",
                    "READ_MESSAGE_HISTORY"
                ],
                [
                    "mention everyone",
                    "MENTION_EVERYONE"
                ]
            ]
        },
        {
            "type": "input_dummy",
            "align": "CENTRE"
        },
        {
            "type": "input_value",
            "name": "channel"
        }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": "#5B80A5",
    "tooltip": "",
    "helpUrl": ""
}


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['member_channel_perms'] = function (block) {
    var member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);


    var code = `ShsHSjJSjSJSJSGHkkhdjdmns.includes(${channel}.permissionsFor(${member}).toArray().filter(x => x == '${dropdown_name}')[0])`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};
