import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_leave_server";

const blockData = {
    "message0": "%{BKY_LEAVE_SERVER}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
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
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${server}.leave()`;
    return code
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
