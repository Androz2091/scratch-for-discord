import Blockly from "blockly/core";

const blockName = "add_inputs";

const blockData = {
    "type": "add_inputs",
    "message0": "Create new inputs %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "blocks",
            "check": "add_text_input"
        }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
}


    Blockly.Blocks[blockName] = {
        init: function () {
            this.jsonInit(blockData);
        }
};

Blockly.JavaScript['add_inputs'] = function (block) {
    var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
    var code = `${statements_blocks}`;
    return code;
};