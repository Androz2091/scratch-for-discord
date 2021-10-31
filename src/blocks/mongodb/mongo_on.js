import * as Blockly from "blockly";

const blockName = "mongo_on";

const blockData = {
    "message0": "When connected to mongodb %1 %2",
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
    const code = `mdb.on('ready', async () => {\n${statements}\n});\n
    `;
    return code;
};