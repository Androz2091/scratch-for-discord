//result_java

import Blockly from "blockly/core";

const blockName = "jg_minecraft_java_players";

const blockData = {
    "message0": "java %1 players",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "currently online",
                'online'
              ],
              [
                "max amount of",
                'max'
              ]
            ],
        }
        
    ],
    "colour": 120,
    "output": "Number",
    "tooltip": "Get player information from the server.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const type = block.getFieldValue("TYPE");
    const code = [`result_java.players.${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};