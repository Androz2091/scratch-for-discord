import Blockly from "blockly/core";

const blockName = "frost_json_to_string";

const blockData = {
    "message0": "Convert object/list %1 to json string",
    "args0": [
    {
        "type": "input_value",
        "name": "STRING",
        "check": ["Object", "List", "Array", "JSON", "Member", "Server", "Channel", "Emoji", "Role"]
    }
    ],
    "output": "String",
    "colour": "#BA4A9A",
    "tooltip": "Converts Object/lists to a json string",
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
