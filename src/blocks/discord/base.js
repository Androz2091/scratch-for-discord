import * as Blockly from "blockly/core";

Blockly.Blocks["discord4stratch_init"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("%{BKY_HUMM}");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
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

Blockly.Blocks["discord4stratch_client_login"] = {
    init: function() {
        this.appendValueInput("token")
            .setCheck("String")
            .appendField("connect with token");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_client_login"] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
    const code = `discord4stratch.client.login(${value});\n`;
    return code;
};