import Blockly from "blockly/core";

const blockName = "on_roleremove";

const blockData = {
    "message0": "When roles is removed from member %1 %2",
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
    const code = `s4d.client.on("guildMemberRoleRemove", async(member, role) => {\n${statements}\n});\n`;
    return code;
};
