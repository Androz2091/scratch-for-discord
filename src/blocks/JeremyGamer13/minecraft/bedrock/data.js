// result_bedrock

import Blockly from "blockly/core";

const blockName = "jg_minecraft_bedrock_data";

const blockData = {
    "message0": "bedrock data",
    "args0": [],
    "colour": 190,
    "output": "JSON",
    "tooltip": "All of the data the server has sent back. Can be stringified into a file and read with data blocks.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`result_bedrock`, Blockly.JavaScript.ORDER_NONE];
    return code;
};