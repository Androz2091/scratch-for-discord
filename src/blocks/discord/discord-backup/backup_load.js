import * as Blockly from "blockly/core";

const blockName = "s4d_backup_load";

const blockData = {
    "message0": "%{BKY_BACKUP_LOAD} %3 %4",
    "args0": [
        {
            "type": "input_value",
            "name": "GUILD",
            "check": "Server"
        },
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
            "name": "BUTTONS"
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
    const sv = Blockly.JavaScript.valueToCode(block, "GUILD", Blockly.JavaScript.ORDER_ATOMIC);
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `backup.load(${id}, ${sv}).then(async () => {\n${statements}\n});\n`
    return code
};