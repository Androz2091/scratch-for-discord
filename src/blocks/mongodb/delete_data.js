import Blockly from "blockly/core";

const blockName = "mongo_delete_data";

const blockData = {
    "message0": "%{BKY_DELETE_DATA}",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
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
    return `mdb.delete(${key});\n`;
};
