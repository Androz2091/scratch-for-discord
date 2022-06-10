import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_remove_all_reactions";

const blockData = {
    "message0": "remove all reactions on message %1",
    "args0": [
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": "Message"
        },
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

Blockly.JavaScript[blockName] = function(block){
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    let code = `${message}.reactions.removeAll()\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type:"notempty",
        message:"RES_REACT_NO_MEMBER",
        types:[
            "MEMBER"
        ]
    }
]);