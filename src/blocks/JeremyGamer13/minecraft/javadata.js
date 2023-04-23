//result_java

import Blockly from "blockly/core";

const blockName = "jg_minecraft_java_data";

const blockData = {
    "message0": "java data",
    "args0": [],
    "colour": 120,
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
    const code = [`result_java`, Blockly.JavaScript.ORDER_NONE];
    return code;
};