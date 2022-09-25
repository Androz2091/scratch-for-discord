import Blockly from "blockly/core";

const blockName = "s4d_set_data_new";

const blockData = {
    "message0": "set %1 to %2 in the database with name %3 %4",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "VALUE"
        },
        {
            "type": "input_dummy",
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": "String"
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5ba58b",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const name2 = name.substring(1, (name.length - 1));
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    return `${name2}.set(String(${key}), ${value});\n`;
};
