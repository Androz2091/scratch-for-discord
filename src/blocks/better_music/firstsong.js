import * as Blockly from "blockly";

const blockName = "first_track";

const blockData = {
    "message0": "When the first song starts %1 %2",
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
    const code = `s4d.client.player.on('songFirst', async (queue, song) => { \n ${statements} \n })\n`;
    return code;
};