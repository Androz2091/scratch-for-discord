import Blockly from "blockly/core";

const blockName = "jg_web_request_advanced_response_data";
const blockData = {
    "message0": "response data",
    "inputsInline": true,
    "colour": "#4C97FF",
    "args0": [],
    "output": null,
    "tooltip": "The data the server sent back.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`response.data`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
