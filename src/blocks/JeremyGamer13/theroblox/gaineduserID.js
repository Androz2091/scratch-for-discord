// roblox_user_info

import Blockly from "blockly/core";

const blockName = "jg_roblox_user_id";

const blockData = {
    "message0": "roblox user id",
    "args0": [],
    "colour": 0,
    "output": "Number",
    "tooltip": "The roblox player's ID by username.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = [`gained_roblox_user_id`, Blockly.JavaScript.ORDER_NONE];
    return code;
};