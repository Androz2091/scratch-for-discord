//result_java

import Blockly from "blockly/core";

const blockName = "jg_minecraft_java_favicon";

const blockData = {
    "message0": "java favicon data URI",
    "args0": [],
    "colour": 120,
    "output": ["ImageDataURI", "String"],
    "tooltip": "Get the favicon of the server.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`result_java.favicon`, Blockly.JavaScript.ORDER_NONE];
    return code;
};