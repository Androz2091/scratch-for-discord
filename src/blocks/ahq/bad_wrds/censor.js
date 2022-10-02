import * as Blockly from "blockly/core";
const ahqcolor = ['#3366ff', '#3366ff', '#3366ff', '#3366ff'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "ahq_bdwrd_cn";
//block working now working
const blockData = {
    "message0": "censored version of %1",
    "args0": [{
        "type": "input_value",
        "name": "BAD",
        "check": ["String"]
    }],
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "String",
    "tooltip": "A filtered version of the text.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const data = Blockly.JavaScript.valueToCode(block, "BAD", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`(censor.censor(String(${data})))`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};