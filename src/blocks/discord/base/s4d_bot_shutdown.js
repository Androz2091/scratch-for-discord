import * as Blockly from "blockly/core";


const blockName = "s4d_bot_shutdown";

const blockData = {
    "message0": "Shutdown the bot",
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Shuts down the bot.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
    const code = `s4d.client.destroy();\n`;
    return code;
};
