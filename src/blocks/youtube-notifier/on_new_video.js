import * as Blockly from "blockly/core";

const blockName = "on_newvideo";

const blockData = {
    "message0": "When a new video is published %1 %2",
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
    const code = `s4d.notifer.on('video', async video => {\n${statements}\n});\n`;
    return code;
};
