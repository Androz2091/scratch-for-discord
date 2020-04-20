import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_add_reaction";

const blockData = {
    "message0": "%{BKY_ADD_REACTION}",
    "args0": [
        {
            "type": "input_value",
            "name": "Reaction",
            "check": "Reaction"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#D4AF37",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const reaction = Blockly.JavaScript.valueToCode(block, "REACTION", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4dmessage.react(${reaction});`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_ADD_REACTION_MISSING_REACTION",
        types: [
            "REACTION"
        ]
    }
]);
