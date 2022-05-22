import Blockly from "blockly/core";

const blockName = "member_channel_perms"

const blockData = {
    "type": "member_channel_perms",
    "message0": "Member %1 has permission %2 %3 on channel %4",
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
                "CREATE_INSTANT_INVITE",
                "CREATE_INSTANT_INVITE"
            ],
            [
                "VIEW_CHANNEL",
                "VIEW_CHANNEL"
            ],
            [
                "SEND_MESSAGES",
                "SEND_MESSAGES"
            ],
            [
                "SEND_TTS_MESSAGES",
                "SEND_TTS_MESSAGES"
            ],
            [
                "MANAGE_MESSAGES",
                "MANAGE_MESSAGES"
            ],
            [
                "EMBED_LINKS",
                "EMBED_LINKS"
            ],
            [
                "ATTACH_FILES",
                "ATTACH_FILES"
            ],
            [
                "READ_MESSAGE_HISTORY",
                "READ_MESSAGE_HISTORY"
            ],
            [
                "MENTION_EVERYONE",
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
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
}


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['member_channel_perms'] = function(block) {
    var member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);

    var code = `perms.includes(${channel}.permissionsFor(${member}).toArray().filter(x => x == '${dropdown_name}')[0])`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};
