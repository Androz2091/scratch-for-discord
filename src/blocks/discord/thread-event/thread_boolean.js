import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_thread_boolean";

const blockData = {
    "message0": "thread %1 is %2?",
    "args0": [
        {
            "type": "input_value",
            "name": "THREAD",
            "check":  "Thread" 
        },
        {
            "type": "field_dropdown",
            "name": "BOOL_TYPE",
            "options": [
              ["archived", "archived"],
              ["locked", "locked"]
            ]
        }
    ],
    "output": "Boolean",
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const thread = Blockly.JavaScript.valueToCode(block, "THREAD", Blockly.JavaScript.ORDER_ATOMIC);
    const boolType = block.getFieldValue("BOOL_TYPE")
    const code = [`${thread}.${boolType}`, Blockly.JavaScript.ORDER_NONE ];
    return code;
    
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "You must specify a valid thread!",
        types: [
            "THREAD"
        ]
    }
]);