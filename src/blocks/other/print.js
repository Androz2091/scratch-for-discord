import * as Blockly from "blockly/core";

const blockName = "s4d_print";

const blockData = {
    "message0": "%{BKY_PRINT}",
    "args0": [
        {
            "type": "input_value",
            "name": "PRINT",
            "check": null
        }
    ],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const print = Blockly.JavaScript.valueToCode(block, "PRINT", Blockly.JavaScript.ORDER_ATOMIC);
    return `console.log(${print});\n`;
};