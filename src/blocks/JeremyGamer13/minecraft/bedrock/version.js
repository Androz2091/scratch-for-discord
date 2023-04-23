// result_bedrock

import Blockly from "blockly/core";

const blockName = "jg_minecraft_bedrock_version";

const blockData = {
    "message0": "bedrock server version",
    "args0": [],
    "colour": 190,
    "output": "String",
    "tooltip": "Get the version of the server.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = [`result_bedrock.version`, Blockly.JavaScript.ORDER_NONE];
    return code;
};