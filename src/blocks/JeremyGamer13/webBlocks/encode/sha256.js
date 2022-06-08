import Blockly from "blockly/core";

const blockName = "sha256";

const blockData = {
    "message0": "encrypt %1 with SHA256",
    "inputsInline": true,
    "args0": [{
        "type": "input_value",
        "name": "encode",
        "check": ["String", "var", "Env"]
    }],
    "colour": 195,
    "output": "String",
    "tooltip": "encrypt a string using sha256",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const text = Blockly.JavaScript.valueToCode(block, "encode", Blockly.JavaScript.ORDER_ATOMIC);
    return [`S4D_APP_CRYPTOJS.SHA256(${text})`, Blockly.JavaScript.ORDER_NONE];
};