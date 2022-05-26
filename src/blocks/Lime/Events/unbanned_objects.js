import * as Blockly from "blockly/core";

const blockName = "unbanned_objects"

const blockData = {
    "type": "unbanned_objects",
    "message0": "Unban %1",
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



Blockly.JavaScript['unbanned_objects'] = function(block) {
    var dropdown_options = block.getFieldValue('options');
    var code = ``;
    if (dropdown_options == "ID"){code = `String(unban.guild.id)`}
    if (dropdown_options == "NAME"){code = `String(unban.guild.name)`}
    if (dropdown_options == "USERNAME"){code = `String(unban.user.username)`}
    if (dropdown_options == "DISCRIMINATOR"){code = `String(unban.user.discriminator)`}
    if (dropdown_options == "MEMBER_ID"){code = `String(unban.user.id)`}

    return [code, Blockly.JavaScript.ORDER_NONE];
};