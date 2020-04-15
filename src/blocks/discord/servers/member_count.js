import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_member_count";

const blockData = {
    "message0": "%{BKY_MEMBER_COUNT}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        }
    ],
    "colour": "#e07e6c",
    "output": "Number",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    return [ `${server}.memberCount`, Blockly.JavaScript.ORDER_NONE ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_SERVER",
        types: [
            "SERVER"
        ]
    }
]);
