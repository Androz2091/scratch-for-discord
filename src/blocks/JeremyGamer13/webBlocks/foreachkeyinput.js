import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_web_foreachkeyinput";

const blockData = {
    "message0": "key",
    "args0": [],
    "colour": 240,
    "output": null,
    "tooltip": "The key name found by the \"Get all keys then for each\" block.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    return [`s4dkey`, Blockly.JavaScript.ORDER_NONE];
};
registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "$This block needs to be in a \"get all keys then for each\" block!",
        types: [
            "jg_web_foreachkey"
        ]
    }
]);
