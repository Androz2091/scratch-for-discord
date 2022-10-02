import Blockly from "blockly/core";

const blockName = "mongo_subtract_data";

const blockData = {
    "message0": "%{BKY_SUBTRACT_DATA}",
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
    "colour": "#4fc99e",
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
    return `mdb.subtract(${key}, ${count});\n`;
};
