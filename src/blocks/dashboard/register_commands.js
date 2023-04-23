import Blockly from "blockly/core";

const blockName = "register_commands";

const blockData = {
    "type": "register_commands",
    "message0": "Add commands to the commands list page %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "commands"
        }
    ],
    "colour": 257,
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['register_commands'] = function (block) {
    var statements_commands = Blockly.JavaScript.statementToCode(block, 'commands');
    // TODO: Assemble JavaScript into code variable.
    var code = `${statements_commands}`;
    return code;
};