// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

Blockly.Blocks["discord4stratch_init"] = {
    init: function() {
        this.appendDummyInput()
            .appendField("import Discord");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_init"] = function() {
    const code = `
    const discordblocks = {
        Discord: require('discord.js'),
        message: null,
        client: null,
        checkMessageExists() {
            if (!discordblocks.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!discordblocks.message) throw new Error('You cannot perform message operations outside an "on message" block')
            if (discordblocks.client.status !== 0) throw new Error('You cannot perform message operations while Discord.js is not connected to Discord's API servers')
        }
    };
    discordblocks.client = new discordblocks.Discord.Client();
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
    const value_name = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
    const code = `discordblocks.client.login(${value_name});\n`;
    return code;
};

Blockly.Blocks["discord4stratch_on_message"] = {
    init: function() {
        this.appendDummyInput()
              .appendField("on message");
          this.appendStatementInput("statements")
              .setCheck(null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
    }
};

Blockly.JavaScript["discord4stratch_on_message"] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'statements');
    const code = `discordblocks.client.on('message', (param1) => {\ndiscordblocks.message = param1;\n${statements}discordblocks.message = null\n});\n`;
    return code;
};
