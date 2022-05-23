import Blockly from "blockly/core";

const blockName = "s4d_set_db2";

const blockData = {
    "message0": "Set current dootabase to %1 .json",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#50a153",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
    return `dootabase.setFile("./"+ ${key}+".json");\n`;
};
