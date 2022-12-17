import * as Blockly from "blockly/core";

const blockName = "s4d_unpause_giveaway";

const blockData = {
    "message0": "%{BKY_UNPAUSE_GIVEAWAY}",
    "args0": [
        {
            "type": "input_value",
            "name": "ID",
            "check": ["Number", "String"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    },
}

Blockly.JavaScript[blockName] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "THEN");
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `s4d.manager.unpause(${id}).then(async () => {\n${statements}\n});\n`
    return code
};