import * as Blockly from "blockly";
const blockName = "something_modal";

const blockData = {
    "message0": "Send forms %1",
    "args0": [
        {
      "type": "input_value",
      "name": "Label",
      "check": "String"
    }
    ],
    "output": "ahq_modal_names",
    "colour": '#40BF4A',
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