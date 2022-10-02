import * as Blockly from "blockly/core";

const blockName = "on_channelCreate";

const blockData = {
    "message0": "When channel is created %1 %2",
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
    const code = `s4d.client.on('channelCreate', async (channel) => {\n${statements}\n});\n`;
    return code;
};
