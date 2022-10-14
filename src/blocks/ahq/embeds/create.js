import * as Blockly from "blockly";
const blockName = "make_ahq_embed";

const blockData = {
    "message0": "Make An Embed with name %1 %2 then %3",
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
    "colour": '#40BF4A',
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const name = (Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE) || "embed");
    const finaln = (name.replace("'", "").replace("'", ""));
    const statementsThen = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `let ${finaln} = new MessageEmbed()\n${statementsThen}`;
    return code;
};