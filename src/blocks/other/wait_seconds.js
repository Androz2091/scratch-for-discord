import * as Blockly from "blockly/core";

const blockName = "s4d_wait_seconds";

const blockData = {
    "message0": "%{BKY_WAIT_SECONDS}",
    "args0": [
        {
            "type": "input_value",
            "name": "TIME",
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
    const time = Blockly.JavaScript.valueToCode(block, "TIME", Blockly.JavaScript.ORDER_ATOMIC);
    return `await delay(Number(${time})*1000);\n`;
};