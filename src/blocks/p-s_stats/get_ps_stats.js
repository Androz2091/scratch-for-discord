import * as Blockly from "blockly/core";


const blockName = "get_stats";

const blockData = {
    "message0": "Get Pc/Server stats",
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
    const code = `
       var os = require('os-utils');
       `
    return code;
};
