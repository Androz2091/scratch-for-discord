import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

const blockName = "s4d_on_react_added";

const blockData = {
    "message0": "%{BKY_ON_REACT_ADDED} %1 %2",
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

javascriptGenerator.forBlock[blockName] = function(block) {
    const statements = javascriptGenerator.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on(Discord.Events.MessageReactionAdd, async (reaction, user) => {\nif (reaction.partial) await reaction.fetch();\nconst rMessage = reaction.message;\nconst rMember = await rMessage.guild?.members.fetch(user.id);\nconst rEmoji = reaction.emoji.name;\n${statements}});\n`;
    return code;
};
