import Blockly from "blockly/core";

const blockName = "s4d_lasercat_switch_break";

const blockData = {
    "message0": "break",
    "args0": [
    ],
    "colour": "#8B48A3",
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
    return `break;
    `;
};