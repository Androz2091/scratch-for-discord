import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "fz_get_all_emoj";

const blockData = {
    "message0": "created emoji/cached emoji",
    "args0": [
    ],
    "colour": "#187795",
    "output": "Emoji",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
return [ `emoj`, Blockly.JavaScript.ORDER_NONE ];
};
registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_GET_ALL_EMOJI_PARENT",
        types: [
            "fz_get_all_emoji"
        ]
    }
]);