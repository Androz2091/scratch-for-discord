// roblox_user_info

import Blockly from "blockly/core";

const blockName = "jg_roblox_user_group_rank";

const blockData = {
    "message0": "roblox user group rank",
    "args0": [],
    "colour": 0,
    "output": "String",
    "tooltip": "The roblox player's rank in the group.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = [`roblox_group_rank`, Blockly.JavaScript.ORDER_NONE];
    return code;
};