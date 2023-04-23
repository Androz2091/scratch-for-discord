import * as Blockly from "blockly";
const blockName = "snd_ahq";

const blockData = {
    "message0": "Send %1 %2 channel %3",
    "args0": [{
        "type": "input_value",
        "name": "value",
        "check": "String"
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "ch",
        "check": "ahqfind"
    }],
    "colour": '#3366ff',
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const value = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_NONE);
    const ch = Blockly.JavaScript.valueToCode(block, "ch", Blockly.JavaScript.ORDER_NONE);
    const code = `${ch}.send({
        content: String(${value})
    });`;
    return code;
};