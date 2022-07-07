import * as Blockly from "blockly/core";
const ahqcolor = ['#ff0000', '#ff0000', '#ff0000', '#ff0000'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "ahq_bdwrd";
//block working now working
const blockData = {
    "message0": "%1 is bad word?",
    "args0": [{
        "type": "input_value",
        "name": "BAD",
        "check": ["String"]
    }],
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "Boolean",
    "tooltip": "Check if text has bad words.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const data = Blockly.JavaScript.valueToCode(block, "BAD", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`(censor.check(String(${data})))`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};