import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_button_click_member";

const blockData = {
    "message0": "%{BKY_BUTTON_CLICK_MEMBER}",
    "colour": "#187795",
    "output": "Member",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["button.clicker.member", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_CLICK",
        types: [
            "s4d_on_click"
        ]
    }
]);
