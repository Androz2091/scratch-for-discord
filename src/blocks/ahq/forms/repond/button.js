import * as Blockly from "blockly";
const blockName = "ahq_ahq_ahq_modal";
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
    "message0": "Send buttons (AHQ) %1",
    "args0": [
        {
      "type": "input_value",
      "name": "Label",
      "check": "String",
    }
    ],
    "output": "ahq_button",
    "colour": listsGetRandomItem(ahqcolor, false),
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const statementsThen = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const code = [`${statementsThen}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};