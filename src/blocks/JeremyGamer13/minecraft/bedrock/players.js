// result_bedrock

import Blockly from "blockly/core";

const blockName = "jg_minecraft_bedrock_players";

const blockData = {
    "message0": "bedrock %1 players",
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
    "colour": 190,
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
    const code = [`result_bedrock.players.${type}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};