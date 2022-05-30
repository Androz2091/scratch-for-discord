// roblox_user_info

import Blockly from "blockly/core";

const blockName = "jg_roblox_group_icon";

const blockData = {
    "message0": "roblox group icon",
    "args0": [],
    "colour": 0,
    "output": "Number",
    "tooltip": "The roblox group's icon by ID.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = [`roblox_group_icon`, Blockly.JavaScript.ORDER_NONE];
    return code;
};