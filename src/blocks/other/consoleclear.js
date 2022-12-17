import * as Blockly from "blockly/core";

const blockName = "s4d_clearconsole";

const blockData = {
    "message0": "clear console",
    "args0": [],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Clears the console on whatever the bot is running on.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
    return `console.clear()
    `;
};