import * as Blockly from "blockly";

const blockName = "when_message_is_edited";

const blockData = {
    "message0": "When a message is edited %1 %2",
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
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on('messageUpdate', async (oldMessage, newMessage) => {
    s4dmessage = newMessage
    ${statements}
});
`;
    return code;
};