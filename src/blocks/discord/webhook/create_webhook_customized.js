import Blockly from "blockly/core";

const blockName = "jose_jg_create_webhook_in_channel_with_name_and_profile_picture_url_with_reason_then_do";

const blockData = {
    "message0": "create webhook in channel %1 with name %2 and profile picture URL %3 with reason %6 then %4 do %5",
    "inputsInline": false,
    "args0": [
        {
            "type": "input_value",
            "name": "channel",
            "check": ["Channel"]
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": ["String"]
        },
        {
            "type": "input_value",
            "name": "URL",
            "check": ["String"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        },
        {
            "type": "input_value",
            "name": "REASON",
            "check": ["String"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "Create a webhook in a channel to send messages as it. Webhooks are channel specific bots that you can make send messages and have any profile picture or name.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const channel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
    const reason = Blockly.JavaScript.valueToCode(block, "REASON", Blockly.JavaScript.ORDER_ATOMIC);
    let exported = ""
    let usable = []
    if (String(url) != null && String(url) != "") {
        usable.push("url")
    }
    if (String(reason) != null && String(reason) != "") {
        usable.push("reason")
    }
    if (usable.length > 0) {
        exported = ", { "
        if (usable.includes("url")) {
            exported += `avatar: String(${url})`
            if (usable.length > 1) exported += `, `
        }
        if (usable.includes("reason")) {
            exported += `reason: String(${reason})`
        }
        exported += " } "
    }
    //, { avatar: String(${url}) }
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `${channel}.createWebhook(String(${name})${exported})
    .then(async webhook => {
        ${statements}
    })
`;
    return code;
};


