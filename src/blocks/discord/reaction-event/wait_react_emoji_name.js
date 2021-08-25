import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_wait_react_emoji_name";

const blockData = {
    "message0": "%{BKY_WAIT_REACT_EMOJI_NAME}",
    "colour": "#5BA58C",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
    const code = ["s4dreaction.emoji.name", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_REACT_EMOJI_ID_PARENT",
        types: [
            "s4d_reaction_wait_added_reaction"
        ]
    }
]);