import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_server_name";

const blockData = {
    "message0": "%{BKY_SERVER_NAME}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        }
    ],
    "colour": "#e07e6c",
    "output": "String",
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
    return [ `${server}.name`, Blockly.JavaScript.ORDER_NONE ];
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
