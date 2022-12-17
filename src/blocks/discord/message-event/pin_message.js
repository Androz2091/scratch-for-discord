import * as Blockly from "blockly/core";

const blockName = "s4d_pin";

const blockData = {
    "message0": "%{BKY_PIN}",
    "args0": [
    ],
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
return "s4dmessage.pin()"
};
