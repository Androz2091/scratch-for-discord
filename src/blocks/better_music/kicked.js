import * as Blockly from "blockly";

const blockName = "kicked";

const blockData = {
    "message0": "When bot is kicked from vc %1 %2",
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
    const code = `s4d.client.player.on('clientDisconnect', async (queue) => { \n ${statements} \n })\n`;
    return code;
};