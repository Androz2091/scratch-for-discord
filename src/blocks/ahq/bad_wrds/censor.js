import * as Blockly from "blockly/core";

const blockName = "ahq_bdwrd_cn";
//block working now working
const blockData = {
    "message0": "censored version of %1",
    "args0": [{
        "type": "input_value",
        "name": "BAD",
        "check": ["String"]
    }],
    "colour": '#3366ff',
    "output": "String",
    "tooltip": "A filtered version of the text.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const data = Blockly.JavaScript.valueToCode(block, "BAD", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`(censor.censor(String(${data})))`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};