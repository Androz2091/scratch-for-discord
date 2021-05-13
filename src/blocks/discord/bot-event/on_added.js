import * as Blockly from "blockly";

const blockName = "s4d_on_added";

const blockData = {
    "message0": "%{BKY_ON_ADDED} %1 %2",
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
    const code = `s4d.client.on('guildCreate', async (s4dguild) => {\n${statements}\n});\n `;
    return code;
};