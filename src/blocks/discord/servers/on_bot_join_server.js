import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

const blockName = "s4d_on_bot_join_server";

const blockData = {
    "message0": "%{BKY_ON_BOT_JOIN_SERVER} %1 %2",
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
    return `s4d.client.on(Discord.Events.GuildCreate, async (s4djoinedServer) => {\n${statements}\n});\n`;
};
