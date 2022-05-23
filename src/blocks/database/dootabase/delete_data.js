import Blockly from "blockly/core";

const blockName = "s4d_delete_data2";

const blockData = {
    "message0": "Delete %1 from dootabase",
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
    return `dootabase.del(String(${key}));\n`;
};
