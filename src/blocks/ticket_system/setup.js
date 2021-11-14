import * as Blockly from "blockly/core";


const blockName = "ticket_setup";

const blockData = {
    "message0": "Set ticket channel (mentioned channel)",
    "args0": [],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = `s4dticket.setup(s4dmessage, s4dmessage.mentions.channels.first().id);`;
    return code;
};