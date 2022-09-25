import Blockly from "blockly/core";

const blockName = "s4d_subtract_data2";

const blockData = {
    "message0": "In dootabase subtract %1 to %2",
    "args0": [
        {
            "type": "input_value",
            "name": "COUNT",
            "check": "Number"
        },
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        }
    ],
    "nextStatement": null,
    "previousStatement": null,
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
    const count = Blockly.JavaScript.valueToCode(block, "COUNT", Blockly.JavaScript.ORDER_ATOMIC);
    return `dootabase.subtract(String(${key}), parseInt(${count}));\n`;
};
