import * as Blockly from "blockly/core";

const blockName = "s4d_delete";

const blockData = {
    "message0": "%{BKY_DELETE_MESSAGE}",
    "colour": "#4C97FF",
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
    const code = `s4dmessage.delete();\n`;
    return code;
};