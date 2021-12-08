import * as Blockly from "blockly/core";
const ahqcolor = ['#3366ff', '#6600cc', '#33cc00', '#ff6666'];
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
    "message0": "Bad Word %1 ?",
    "args0": [
        {
            "type": "INPUT_VALUE",
            "name": "BAD",
            "check": "String"
        }
    ],
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "Boolean",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block){
    const data = Blockly.JavaScript.valueToCode(block, "BAD", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `(censor.check(String(${data})))`;
    return code;
};