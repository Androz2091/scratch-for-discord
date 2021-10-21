import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_chnl_exist";

const blockData = {
    "message0": "channel %1 exist?",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        }
    ],
    "colour": "#50a6c9",
    "output": "Boolean",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const chnl = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`typeof ${chnl} !== undefined`, Blockly.JavaScript.ORDER_NONE ];
    return code;
    
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);