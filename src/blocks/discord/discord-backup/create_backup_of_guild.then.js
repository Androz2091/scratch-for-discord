import * as Blockly from "blockly/core";

const blockName = "s4d_create_backup_of_guild_then";

const blockData = {
    "message0": "%{BKY_CREATE_BACKUP_OF_GUILD_THEN} %1 %2 %3",
    "args0": [
        {
            "type": "input_value",
            "name": "GUILD",
            "check": "Server"
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
    const sv = Blockly.JavaScript.valueToCode(block, "GUILD", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `backup.create(${sv}, {jsonBeautify: true}).then(async (backupData) => {\n${statements}\n});\n`
    return code
};