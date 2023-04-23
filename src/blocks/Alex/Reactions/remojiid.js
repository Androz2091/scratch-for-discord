import Blockly from "blockly/core";

const blockName = "reaction_emoji_id";

const blockData = {
    "message0": "Reaction emoji ID",
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

Blockly.JavaScript[blockName] = function() {
    const code = ["reaction.emojiId", Blockly.JavaScript.ORDER_NONE];
    return code;
};
