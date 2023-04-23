import Blockly from "blockly/core"
const blockName = "jg_example_output"
const blockData = {
    "message0": "example output %1",
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": "String"
        }
    ],
    "output": "String",
    "colour": 300,
    "tooltip": "An example of an output block.",
    "helpUrl": ""
}
Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${text} + "abc"`
    return [code, Blockly.JavaScript.ORDER_NONE]
}
