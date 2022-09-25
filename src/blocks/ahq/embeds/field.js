import * as Blockly from "blockly";
const blockName = "fld_ahq_embed";
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
    "message0": "Add Field name %1 description %2 inline %3 %4 Embed %5",
    "args0": [
        {
            "type": "input_value",
            "name": "Label",
            "check": ["String"]
        },
        {
            "type": "input_value",
            "name": "image",
            "check": ["String"]
        },
        {
            "type": "input_value",
            "name": "ahq",
            "check": "Boolean"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
    ],
    "colour":  (listsGetRandomItem(ahqcolor, false)),
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
    const finaln = name.replace("'", "").replace("'", "");
    const statementsThen = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const ahq = Blockly.JavaScript.valueToCode(block, "image", Blockly.JavaScript.ORDER_NONE) || "'null'";
    const code = `${finaln}.addField(${statementsThen}, ${ahq}, ${Blockly.JavaScript.valueToCode(block, "ahq", Blockly.JavaScript.ORDER_NONE) || false});`;
    return code;
};