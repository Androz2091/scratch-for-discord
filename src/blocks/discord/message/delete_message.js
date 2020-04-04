import * as Blockly from "blockly/core";

const s4d_delete = {
    "message0": "%{BKY_DELETE_MESSAGE}",
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["s4d_delete"] = {
    init: function() {
        this.jsonInit(s4d_delete);
    }
};

Blockly.JavaScript["s4d_delete"] = function(){
    const code = `s4d.message.delete();\n`;
    return code;
};
