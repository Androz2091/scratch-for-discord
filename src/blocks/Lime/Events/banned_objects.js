import * as Blockly from "blockly/core";

const blockName = "banned_objects"

const blockData = {
    "type": "banned_objects",
    "message0": "Ban %1",
    "args0": [
    {
        "type": "field_dropdown",
        "name": "options",
        "options": [
        [
            "guild id",
            "ID"
        ],
        [
            "guild name",
            "NAME"
        ],
        [
            "member username",
            "USERNAME"
        ],
        [
            "member discriminator",
            "DISCRIMINATOR"
        ],
        [
            "member id",
            "MEMBER_ID"
        ],
        [
            "Reason",
            "REASON"
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
    init: function() {
        this.jsonInit(blockData);
    }
};



Blockly.JavaScript['banned_objects'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var code = ``;
    if (dropdown_options == "ID"){code = `String(ban.guild.id)`}
    if (dropdown_options == "NAME"){code = `String(ban.guild.name)`}
    if (dropdown_options == "USERNAME"){code = `String(ban.user.username)`}
    if (dropdown_options == "DISCRIMINATOR"){code = `String(ban.user.discriminator)`}
    if (dropdown_options == "MEMBER_ID"){code = `String(ban.user.id)`}
    if (dropdown_options == "REASON"){code = `String(ban.reason)`}

    return [code, Blockly.JavaScript.ORDER_NONE];
};