import * as Blockly from "blockly";

const blockName = "vanity-url";

const blockData = {
    "message0": "vanity url",
    "args0": [
    ],
    "output": "String",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
        const code = ["vanityURL", Blockly.JavaScript.ORDER_NONE];
        return code;
};