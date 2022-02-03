import * as Blockly from "blockly/core";

const blockName = "crosspost";

const blockData = {
    "message0": "Crosspost recived message (only anouncment channels)",
    "args0": [
    ],
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

Blockly.JavaScript[blockName] = function(){
    return `s4dmessage.crosspost();\n`;
};
