import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_set_bot_stream_text";

const blockData = {
    "message0": "Set status to STREAMING with text %2 using url %1",
    "args0": [
        {
            "type": "input_value",
            "name": "URL",
            "check": ["Number", "String"]
        }, 
        {
            "type": "input_value",
            "name": "NAME",
            "check": "String"
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
    const url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4d.client.user.setActivity(${name}, { 
         type: "STREAMING", 
          url: ${url}});
          `;
    return code;
};

registerRestrictions(blockName, [{
    type: "notempty",
    message: "RES_MISSING_URL",
    types: [
        "URL"
    ]
}]); 