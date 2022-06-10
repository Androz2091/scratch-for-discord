import Blockly from "blockly/core";


const blockName = 'lime_msg_author_attributes'

const blockData = {
    "type": "lime_msg_author_attributes",
    "message0": "Get message author %1",
    "args0": [
    {
        "type": "field_dropdown",
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
            "is a bot?",
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
            "is it system?",
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
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#4C97FF',
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['lime_msg_author_attributes'] = function(block) {
    var dropdown = block.getFieldValue('dropdown')
    var code = ''

    
    return code
};