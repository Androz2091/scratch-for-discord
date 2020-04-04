import Blockly from "blockly/core";

const s4d_on_connected = {
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
    ]
};

Blockly.Blocks["s4d_on_connected"] = {
    init: function() {
        this.jsonInit(s4d_on_connected);
    }
};

Blockly.JavaScript["s4d_on_connected"] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on('ready', async () => {\n${statements}\n});\n`;
    return code;
};
