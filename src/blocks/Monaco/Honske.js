import * as Blockly from "blockly/core";

const blockName = "monaco_honske";


const blockData = {
    "message0": "honske bonske",
    "inputsInline": true,
    "args0": [
      
    ],
    "colour": "#D14081",
"previousStatement": null,
"nextStatement": null,
    "tooltip": "Honske Bonske.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
console.log("honske bonske")
};