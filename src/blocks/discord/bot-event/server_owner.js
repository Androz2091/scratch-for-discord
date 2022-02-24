import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_add_server_owner";

const blockData = {
    "message0": "%{BKY_ADD_SERVER_OWNER}",
    "colour": "#5BA58C",
    "tooltip": "",
    "output": "Member",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["s4dguild.owner", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_ADDED",
        types: [
            "s4d_on_added",
            "s4d_on_remove"
        ]
    }
]);