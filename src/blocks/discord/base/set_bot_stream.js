import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_set_bot_stream";

const blockData = {
    "message0": "%{BKY_SET_BOT_STREAM}",
    "args0": [{
        "type": "input_value",
        "name": "URL",
        "check": ["Number", "String"]
    }, ],
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
    const code = `s4d.client.user.setActivity("with depression", { \n type: "STREAMING", \n url: ${url}});\n`;
    return code;
};

registerRestrictions(blockName, [{
    type: "notempty",
    message: "RES_MISSING_URL",
    types: [
        "URL"
    ]
}]); 