import * as Blockly from "blockly/core";
/* eslint-disable */
const blockName = "s4d_dd_giveaway";

const blockData = {
    "message0": "%4 giveaway id %1 then %2 %3",
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
        },
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                ["reroll", "reroll"],
                ["delete", "delete"],
                ["end", "end"],
                ["pause", "pause"],
                ["unpause", "unpause"]
            ]
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
    const type = block.getFieldValue("TYPE");
    var code = `s4d.manager.${type}(${id}).then(async () => {\n${statements}\n});\n`
    return code
};