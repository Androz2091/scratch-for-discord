import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_menu_guild";

const blockData = {
    "message0": "%{BKY_MENU_SERVER}",
    "colour": "#187795",
    "output": "Server",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["menu.guild", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MENU_CLICK",
        types: [
            "s4d_on_menu_click"
        ]
    }
]);
