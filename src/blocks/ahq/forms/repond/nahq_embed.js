import * as Blockly from "blockly";
const blockName = "ahq_ahq_modal";
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
    "message0": "Send embeds %1 ahq embeds name (if theres) %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "ahq",
            "options": [
            [
                "jose/redo",
                "1"
            ],
            [
                "ahq embeds",
                "2"
            ]
            ]
        },
        {
      "type": "input_value",
      "name": "Label",
      "check": "String",
    }
    ],
    "output": "ahq_type",
    "colour": listsGetRandomItem(ahqcolor, false),
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const statementsThen = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    let codea = "";
    if (block.getFieldValue("ahq") == "1") {
        codea = "embed"
    } else {
        codea = `${statementsThen.replace("'", "").replace("'", "")}`
    }
    const code = [`${codea}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};