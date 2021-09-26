import * as Blockly from "blockly/core";

const blockName = "on_ban";

const blockData = {
    "message0": "When member is banned %1 %2",
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
    const code = `s4d.client.on('guildBanAdd', async (ban) => {\n${statements}\n});\n`;
    return code;
};
