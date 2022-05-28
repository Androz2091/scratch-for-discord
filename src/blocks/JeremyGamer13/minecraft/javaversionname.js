//result_java

import Blockly from "blockly/core";

const blockName = "jg_minecraft_java_version";

const blockData = {
    "message0": "java server version",
    "args0": [],
    "colour": 120,
    "output": "String",
    "tooltip": "Get the game version of the server. Sometimes isn't just a version number.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`result_java.version.name`, Blockly.JavaScript.ORDER_NONE];
    return code;
};