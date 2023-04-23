import Blockly from "blockly/core";

const blockName = "jg_web_request_advanced_get_response_data";
const blockData = {
    "message0": "get %1 from response data",
    "inputsInline": true,
    "colour": "#4C97FF",
    "args0": [
        {
            "type": "input_value", 
            "name": "VALUE",
            "check": ["String","var","Env"]
        },
    ],
    "output": null,
    "tooltip": "Get a certain thing from the response data.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC).replaceAll("'", "").replaceAll('"', "");
    const code = [`response.data.${value}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
