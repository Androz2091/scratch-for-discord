import * as Blockly from "blockly";

const on_message = {
    "message0": "%{BKY_ON_MESSAGE} %1 %2",
    "colour": 230,
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

Blockly.Blocks["discord4stratch_on_message"] = {
    init: function() {
        this.jsonInit(on_message);
    }
};

Blockly.JavaScript["discord4stratch_on_message"] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
    const code = `discord4stratch.client.on('message', async (param1) => {\ndiscord4stratch.message = param1;\n${statements}discord4stratch.message = null\n});\n`;
    return code;
};

const on_connected = {
    "message0": "%{BKY_ON_CONNECTED} %1 %2",
    "colour": 230,
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

Blockly.Blocks["discord4stratch_on_connected"] = {
    init: function() {
        this.jsonInit(on_connected);
    }
};

Blockly.JavaScript["discord4stratch_on_connected"] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
    const code = `discord4stratch.client.on('ready', async () => {\n${statements}\n});\n`;
    return code;
};