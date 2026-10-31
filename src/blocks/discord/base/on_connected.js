import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

const blockName = "s4d_on_connected";

const blockData = {
    "message0": "%{BKY_ON_CONNECTED} %1 %2",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "tooltip": "%{BKY_ON_CONNECTED_TOOLTIP}"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const statements = javascriptGenerator.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on(Discord.Events.ClientReady, async () => {\n${statements}\n});\n`;
    return code;
};
