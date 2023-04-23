// jg_minecraft_rcon_when_command_response
// S4D_APP_MC_RCON
// response

import Blockly from "blockly/core";

const blockName = "jg_minecraft_rcon_command_response";

const blockData = {
    "message0": "command response",
    "args0": [],
    "colour": 160,
    "output": "String",
    "tooltip": "The response to the command that was ran by the bot.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`response.message`, Blockly.JavaScript.ORDER_NONE];
    return code;
};