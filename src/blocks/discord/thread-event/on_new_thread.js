import * as Blockly from "blockly";

const blockName = "s4d_on_thread_create";

const blockData = {
    "message0": "%{BKY_ON_THREAD_CREATE} %1 %2",
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
    const code = `s4d.client.on('threadCreate', async (s4dThread) => {\n${statements}\n});\n`;
    return code;
};
