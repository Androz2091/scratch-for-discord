import * as Blockly from "blockly";

const blockName = "queue_error";

const blockData = {
    "message0": "When there is an error in queue %1 %2",
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
    const code = `s4d.player.on("error", async (error, queue) => {\n ${statements} \n})\n`;
    return code;
};