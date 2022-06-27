import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";
const blockName = "s4d_member_banner";

const blockData = {
    "message0": "Member Banner",
    "colour": "#187795",
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
    const code = ["banner", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [{
        type: "notempty",
        message: "RES_MISSING_CONTENT",
        types: [
            "CONTENT"
        ]
    },
    {
        type: "toplevelparent",
        message: "$must be in 'get member banner' block",
        types: [
            "s4d_get_user_banner"
        ]
    }
]);