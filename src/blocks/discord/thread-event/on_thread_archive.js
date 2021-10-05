import * as Blockly from "blockly";

const blockName = "s4d_on_thread_archive";

const blockData = {
    "message0": "%{BKY_ON_THREAD_ARCHIVE} %1 %2",
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
    const code = `s4d.client.on('threadUpdate', async (s4dOldThread, s4dNewThread) => {\nif (!s4dOldThread.archived && s4dNewThread.archived) {\n${statements}\n}\n});\n`;
    return code;
};
