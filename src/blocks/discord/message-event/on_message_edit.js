import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

const blockName = "s4d_on_message_edit";

const blockData = {
    "message0": "%{BKY_ON_MESSAGE_EDIT} %1 %2",
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

// The message blocks work here too: the edited message is s4dmessage, like in "When a message is received"
javascriptGenerator.forBlock[blockName] = function(block) {
    const statements = javascriptGenerator.statementToCode(block, "STATEMENTS");
    return `s4d.client.on(Discord.Events.MessageUpdate, async (s4doldMessage, s4dmessage) => {
    // Messages sent before the bot started arrive partial, and link previews loading also count as edits
    if (s4dmessage.partial) s4dmessage = await s4dmessage.fetch();
    if (s4doldMessage.content === s4dmessage.content) return;
${statements}
});\n`;
};
