import Blockly from "blockly/core"
const blockName = "jg_example_block"
const blockData = {
    "message0": "example block %1",
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 300,
    "tooltip": "An example block.",
    "helpUrl": ""
}
Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const member = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    const code = `console.log(${member})
`
    return code
}
