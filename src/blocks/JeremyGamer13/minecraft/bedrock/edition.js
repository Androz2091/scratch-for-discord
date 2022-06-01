// result_bedrock

import Blockly from "blockly/core";

const blockName = "jg_minecraft_bedrock_edition";

const blockData = {
    "message0": "bedrock server world name",
    "args0": [],
    "colour": 190,
    "output": "String",
    "tooltip": "Checks what the servers world name is.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = [`result_bedrock.map`, Blockly.JavaScript.ORDER_NONE];
    return code;
};