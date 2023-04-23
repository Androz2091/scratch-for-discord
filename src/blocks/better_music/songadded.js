import * as Blockly from "blockly";

const blockName = "track_added";

const blockData = {
    "message0": "when a track is added %1 %2",
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
    const code = `s4d.player.on("songAdd", async (queue, song) => {\n ${statements} \n})\n`;
    return code;
};