import * as Blockly from "blockly";

const blockName = "when_message_is_edited";

const blockData = {
    "message0": "When message is edited %1 %2",
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
    const code = `s4d.client.on('messageUpdate', (oldMessage, newMessage) => {\n${statements}\n});\n`;
    return code;
};
