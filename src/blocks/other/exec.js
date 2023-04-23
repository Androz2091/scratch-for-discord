import * as Blockly from "blockly/core";

const blockName = "s4d_exec";

const blockData = {
    "message0": "run console command %1",
    "args0": [
        {
            "type": "input_value",
            "name": "EVAL",
            "check": ["Number", "String"]
        }
    ],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const code = Blockly.JavaScript.valueToCode(block, "EVAL", Blockly.JavaScript.ORDER_ATOMIC);
    return `exec(${code});\n`;
};