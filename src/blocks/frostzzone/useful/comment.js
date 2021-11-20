import * as Blockly from "blockly/core";

const blockName = "s4d_comment";

const blockData = {
    "message0": "comment ",
    "args0": [
        {
            "type": "input_value",
            "name": "text",
            "check": [ "Number", "String" ]
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
    const print = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_ATOMIC);
    return `${print}
\n`;
};