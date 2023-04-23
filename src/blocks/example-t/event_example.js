import Blockly from "blockly/core"
const blockName = "jg_example_event"
const blockData = {
    "message0": "example event %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "BLOCKS"
        }
    ],
    "colour": 300,
    "tooltip": "An example event block.",
    "helpUrl": ""
}
Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const blocks = Blockly.JavaScript.statementToCode(block, 'BLOCKS');
    const code = `
${blocks}
`
    return code
}
