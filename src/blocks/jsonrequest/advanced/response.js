import Blockly from "blockly/core";

const blockName = "jg_web_request_advanced_response";
const blockData = {
    "message0": "response json",
    "inputsInline": true,
    "colour": "#4C97FF",
    "args0": [],
    "output": ["Object", "JSON"],
    "tooltip": "A JSON containing the server's response. Can be saved into a file if stringified and read with Data blocks.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`response`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
