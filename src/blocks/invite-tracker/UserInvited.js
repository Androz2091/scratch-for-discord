import * as Blockly from "blockly/core";

const blockName = "userinvited";

const blockData = {
    "message0": "When some is invited %1 %2",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ]
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `s4d.Inviter.on('UserInvited',async function (member,uses,inviter,invite) {\n${statements}\n});\n`;
    return code;
};
