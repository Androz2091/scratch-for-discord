import Blockly from "blockly/core";

const blockName = "reaction_added";

const blockData = {
    "message0": "When someone reacted %1 %2",
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
    const code = `s4d.client.on("messageReactionAdd", async (reaction, user) => {${statementsThen}})`;
    return code;
};