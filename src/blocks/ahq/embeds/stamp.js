import * as Blockly from "blockly";
const blockName = "stamp_ahq_embed";
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
    "message0": "Set Timestamp to Embed %1",
    "args0": [
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
    const code = `${finaln}.setTimestamp();`;
    return code;
};