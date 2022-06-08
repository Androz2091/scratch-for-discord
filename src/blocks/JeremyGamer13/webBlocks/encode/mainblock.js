import Blockly from "blockly/core";

const blockName = "jg_encode_main";

const blockData = {
    "message0": "%1 text %2 to type %3",
    "inputsInline": true,
    "args0": [
        {
            "type": "input_value",
            "name": "type2",
            "check": ["encodedecodedropdowntype0216980", "String", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "encode",
            "check": ["String", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "type",
            "check": ["encodedecodedropdowntype0216980", "String", "var", "Env"]
        }
    ],
    "colour": 195,
    "output": "String",
    "tooltip": "Encode/Decode text to a certain type. Can use Strings, Variables, and Env secrets.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "encode", Blockly.JavaScript.ORDER_ATOMIC);
    const type = Blockly.JavaScript.valueToCode(block, "type", Blockly.JavaScript.ORDER_ATOMIC);
    const typefrom = Blockly.JavaScript.valueToCode(block, "type2", Blockly.JavaScript.ORDER_ATOMIC);
    return [`Buffer.from(${text}, ${typefrom}).toString(${type})`, Blockly.JavaScript.ORDER_NONE];
};
