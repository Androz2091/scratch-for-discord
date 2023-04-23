import * as Blockly from "blockly/core";

const blockName = "s4d_button_row";

const blockData = {
    "message0": "button row %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "BUTTONS"
        }
    ],
    "colour": "#4C97FF",
    "output": "ButtonRow"
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    },
}

Blockly.JavaScript[blockName] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "BUTTONS");
    var code = [`new MessageActionRow()\n.addComponents(${statements})`, Blockly.JavaScript.ORDER_NONE];
    return code
};