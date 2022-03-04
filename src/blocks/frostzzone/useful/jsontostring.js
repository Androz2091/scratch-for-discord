import Blockly from "blockly/core";

const blockName = "frost_json_to_string";

const blockData = {
    "message0": "Convert JSON/object data %1 to string",
    "args0": [
    {
        "type": "input_value",
        "name": "STRING",
        "check": ["JSON", "Member", "Server", "Channel", "Emoji", "Role"]
    }
    ],
    "output": "String",
    "colour": "#D14081",
    "tooltip": "Converts JSON/Objects to a string",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const code = Blockly.JavaScript.valueToCode(block, "STRING", Blockly.JavaScript.ORDER_ATOMIC);
    return [`JSON.stringify(${code})`, Blockly.JavaScript.ORDER_NONE ];
};
