//result_java

import Blockly from "blockly/core";

const blockName = "jg_minecraft_java_motd";

const blockData = {
    "message0": "get %1 MOTD java",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "raw",
                'raw'
              ],
              [
                "clean",
                'clean'
              ],
              [
                "HTML",
                'html'
              ]
            ],
        }
        
    ],
    "colour": 120,
    "output": "String",
    "tooltip": "Get the MOTD of the Java server. Raw includes text tags, Clean removes the text tags, and HTML converts the MOTD to HTML.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const type = block.getFieldValue("TYPE");
    const code = [`result_java.motd.${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};