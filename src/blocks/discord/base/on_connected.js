import Blockly from "blockly/core";

const blockName = "s4d_on_connected";

const blockData = {
    "message0": "When the bot is connected %1 %2",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "tooltip": "Event emitted when your bot is connected to Discord. "
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on('ready', async () => {\n${statements}\n});\n`;
    return code;
};
