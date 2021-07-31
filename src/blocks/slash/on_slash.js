import * as Blockly from "blockly";

const blockName = "on_slash";

const blockData = {
    "message0": "When slash command is recieved %1 %2",
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
    const code = `s4d.client.on('interactionCreate', async (interaction) => {\n${statements}\n});\n`;
    return code;
};
