import Blockly from "blockly/core";

const blockName = "jg_encode_hash";

const blockData = {
    "message0": "hash text %1 %2 times",
    "inputsInline": true,
    "args0": [
        {
            "type": "input_value",
            "name": "encode",
            "check": ["String", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "rounds",
            "check": ["Number", "var", "Env"]
        }
    ],
    "colour": 195,
    "output": "String",
    "tooltip": "Hash text with a certain amount of rounds. The more rounds, the better but also slower. Can use Strings, Variables, and Env secrets for the input, and Numbers, Variables, and Env secrets for the amount of rounds.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "encode", Blockly.JavaScript.ORDER_ATOMIC);
    const rounds = Blockly.JavaScript.valueToCode(block, "rounds", Blockly.JavaScript.ORDER_ATOMIC);
    return [`bcrypt.hashSync(${text}, ${rounds})`, Blockly.JavaScript.ORDER_NONE];
};
