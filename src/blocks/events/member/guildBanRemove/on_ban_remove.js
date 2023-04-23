import * as Blockly from "blockly/core";

const blockName = "on_ban_remove";

const blockData = {
    "message0": "When member is unbanned %1 %2",
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
    const code = `s4d.client.on('guildBanRemove', async (ban) => {\n${statements}\n});\n`;
    return code;
};
