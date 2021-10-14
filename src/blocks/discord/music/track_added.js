import * as Blockly from "blockly";

const blockName = "s4d_track_added";

const blockData = {
    "message0": "%{BKY_TRACK_ADDED} %1 %2",
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
    const code = `s4d.player.on("trackAdd", async (queue, track) => {\n ${statements} \n})\n`;
    return code;
};
