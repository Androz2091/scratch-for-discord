import * as Blockly from "blockly";
const blockName = "make_ahq_modal";
const ahqcolor = ['#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockData = {
    "message0": "Make A Form with name %1 %2 title %3 %4 id %5 %6 then %7",
    "args0": [
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "title",
            "check": "String"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "id",
            "check": "String"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
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
    const name = (Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE) || "modal");
    const finaln = (name.replace("'", "").replace("'", ""));
    const statementsThen = Blockly.JavaScript.statementToCode(block, "STATEMENTS", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `let ${finaln} = new Modal()
    .setCustomId(${Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_NONE)})
    .setTitle(${Blockly.JavaScript.valueToCode(block, "title", Blockly.JavaScript.ORDER_NONE)})
    .addComponents(${statementsThen})`;
    return code;
};