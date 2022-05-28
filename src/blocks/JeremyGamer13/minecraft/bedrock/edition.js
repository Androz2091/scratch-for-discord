// result_bedrock

import Blockly from "blockly/core";

const blockName = "jg_minecraft_bedrock_edition";

const blockData = {
    "message0": "bedrock server edition",
    "args0": [],
    "colour": 190,
    "output": "String",
    "tooltip": "Checks if the server is Pocket Edition or Bedrock Edition.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`result_bedrock.edition`, Blockly.JavaScript.ORDER_NONE];
    return code;
};