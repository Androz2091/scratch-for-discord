import * as Blockly from "blockly";
const blockName = "rply_ahq_button";
const ahqcolor = ['#3366ff', '#6600cc', '#33cc00', '#ff6666'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockData = {
    "message0": "Reply %1 %2 %3 ephemeral %4 %5 button %6",
    "args0": [
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "Label",
            "check": ["String", "Integer"]
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "button name",
            "check": "Boolean"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "button val",
            "check": "String"
        },
    ],
    "colour": listsGetRandomItem(ahqcolor, false),
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    var ahq = ``;
    const data = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const statementsThen = Blockly.JavaScript.valueToCode(block, "button val", Blockly.JavaScript.ORDER_NONE);
    const eph = Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE) || false;
    if (statementsThen) {
        ahq = `,\ncomponents: [new MessageActionRow().addComponents(
            ${statementsThen.replace("'", "").replace("'", "")}
        )]`;
    }
    const code = `i.reply({
        content: String(${data}),
        ephemeral: ${eph}${ahq.replace("`", "").replace("`", "")}
        });`;
    return code;
};