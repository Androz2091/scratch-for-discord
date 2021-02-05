import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_server_owner";

const blockData = {
    "message0": "%{BKY_SERVER_OWNER}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        }
    ],
    "colour": "#e07e6c",
    "output": "Member",
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
    return [ `${server}.owner || await ${server}.members.fetch(${server}.ownerID)`, Blockly.JavaScript.ORDER_NONE ];
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
