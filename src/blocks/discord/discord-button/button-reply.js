import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_button_reply";

const blockData = {
    "message0": "%{BKY_BUTTON_REPLY}",
    "args0": [
        {
            "type": "input_value",
            "name": "REPLY",
            "check": [ "String","Number" ]
        },
        {
            "type": "input_value",
            "name": "TRUEORFALSE",
            "check": [ "Boolean" ]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const tof = Blockly.JavaScript.valueToCode(block, "TRUEORFALSE", Blockly.JavaScript.ORDER_ATOMIC);
    const reply = Blockly.JavaScript.valueToCode(block, "REPLY", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `await button.reply.send(${reply},${tof})\n`
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
