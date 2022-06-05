//result_java

import Blockly from "blockly/core";

const blockName = "jg_minecraft_query_player_list";

const blockData = {
    "message0": "%1 java server player list",
    "args0": [
        {
            "type": "field_image",
            "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
            "width": 15,
            "height": 15,
            "alt": "*",
            "flipRtl": false
        }
    ],
    "colour": 85,
    "output": ["Array", "List"],
    "tooltip": "Gets the players on the server and puts them in a list. Only works if the server has enabled Query.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = `result_query_java.players.list`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};