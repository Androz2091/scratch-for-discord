import Blockly from "blockly/core";

const blockName = "jg_when_ran";

const blockData = {
    "message0": "When the code runs %1 %2",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "tooltip": "The blocks inside will run when the code is started."
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `
    ${statements}
    `;
    return code;
};
