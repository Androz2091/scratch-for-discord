import * as Blockly from "blockly/core";

const init = {
    "message0": "%{BKY_INIT}",
    "colour": "#F46580",
    "tooltip": "%{BKY_INIT_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks["discord4stratch_init"] = {
    init: function() {
        this.jsonInit(init);
    }
};

Blockly.JavaScript["discord4stratch_init"] = function() {
    const code = `
    const discord4stratch = {
        Discord: require('discord.js'),
        message: null,
        client: null,
        checkMessageExists() {
            if (!discord4stratch.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!discord4stratch.message) throw new Error('You cannot perform message operations outside an "on message" block')
            if (discord4stratch.client.status !== 0) throw new Error('You cannot perform message operations while Discord.js is not connected to Discord's API servers')
        }
    };
    discord4stratch.client = new discord4stratch.Discord.Client();
    `;
    return code;
};

const client_login = {
    "type": "block_type",
    "message0": "%{BKY_CLIENT_LOGIN}",
    "args0": [
        {
            "type": "input_value",
            "name": "token",
            "check": "String"
        }
    ],
    "colour": "#F46580",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["discord4stratch_client_login"] = {
    init: function() {
        this.jsonInit(client_login);
    }
};

Blockly.JavaScript["discord4stratch_client_login"] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
    const code = `discord4stratch.client.login(${value});\n`;
    return code;
};