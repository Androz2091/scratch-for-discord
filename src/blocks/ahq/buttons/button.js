import * as Blockly from "blockly";

const blockName = "on_real_button";

const blockData = {
    "message0": "When a button is clicked %1 %2",
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
    const statementsThen = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_NONE);
    const code = `s4d.client.on('interactionCreate', async (i) => {\nlet member = i.guild.members.cache.get(i.member.user.id)\nlet interaction = i; if (!(i.isButton())) return;\n${statementsThen}\n});\n`;
    return code;
};