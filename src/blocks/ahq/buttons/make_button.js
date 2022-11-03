import * as Blockly from "blockly";
const blockName = "make_ahq_button";

const blockData = {
    "message0": "make a button with name %1 %2 then %3",
    "args0": [
        {
            "type": "input_value",
            "name": "button name",
            "check": ["String"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "colour": '#33cc00',
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const name = Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE);
    const finaln = name.replace("'", "").replace("'", "");
    const statementsThen = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `let ${finaln} = new MessageButton()\n${statementsThen}`;
    return code;
};