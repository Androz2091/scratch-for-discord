import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_remove_reactions";

const blockData = {
    "message0": "remove all reactions on the message %1 with id/name %2",
    "args0": [
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": "Message"
        },
        {
            "type": "input_value",
            "name": "EMOJI",
            "check": "String"
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const id = Blockly.JavaScript.valueToCode(block, "EMOJI", Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${message}.reactions.cache.get(${id}).remove()\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_REACT_NO_MEMBER",
        types: [
            "MEMBER"
        ]
    }
]);