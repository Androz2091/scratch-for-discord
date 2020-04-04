import * as Blockly from "blockly/core";

const s4d_import = {
    "message0": "%{BKY_IMPORT}",
    "colour": "#F46580",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["s4d_import"] = {
    init: function() {
        this.jsonInit(s4d_import);
    }
};

Blockly.JavaScript["s4d_import"] = function() {
    const code = `
    const delay = (seconds) => new Promise((resolve) => setTimeout(() => resolve, seconds*1000));
    const s4d = {
        Discord: require('discord.js'),
        message: null,
        client: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.message) throw new Error('You cannot perform message operations outside an "on message" block')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client();
    `;
    return code;
};
