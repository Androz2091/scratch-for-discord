import Blockly from "blockly/core";

const blockName = "s4d_create_webhook_then";

const blockData = {
    "message0": "%{BKY_CREATE_WEBHOOK_THEN}",
    "args0": [
        {
            "type": "input_value",
            "name": "channel",
            "check": ["Channel"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
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
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `${channel}.createWebhook('Spidey Bot','https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png').then(async webhook=>{\n${statements}\n})\n`;
    return code;
};


