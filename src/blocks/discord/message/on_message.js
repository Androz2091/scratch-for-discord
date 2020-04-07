import * as Blockly from "blockly";

const s4d_on_message = {
    "message0": "%{BKY_ON_MESSAGE} %1 %2",
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

Blockly.Blocks["s4d_on_message"] = {
    init: function() {
        this.jsonInit(s4d_on_message);
    }
};

Blockly.JavaScript["s4d_on_message"] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on('message', async (param1) => {\ns4d.message = param1;\n${statements}s4d.message = null\n});\n`;
    return code;
};
