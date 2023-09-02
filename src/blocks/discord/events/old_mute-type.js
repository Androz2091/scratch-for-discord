import Blockly from "blockly/core";

const blockName = "s4d_oldmute_type";

const blockData = {
    "message0": "Old Mute Type",
    "colour": "#187795",
    "output": "Boolean",
    "tooltip": "The mute type can be self-muted or server-muted.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ['oldMuteType', Blockly.JavaScript.ORDER_NONE];
    return code;
};