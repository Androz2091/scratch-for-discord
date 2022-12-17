import * as Blockly from "blockly";

const blockName = "banner-url";

const blockData = {
    "message0": "banner url",
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
        const code = ["bannerURL", Blockly.JavaScript.ORDER_NONE];
        return code;
};