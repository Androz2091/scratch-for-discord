import * as Blockly from "blockly";
const blockName = "ahqq_ahq_modal";

const blockData = {
    "message0": "Send jose/redo embeds",
    "args0": [
    ],
    "output": "ahq_type",
    "colour": '#40BF4A',
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function() {
    const code = [`embed`, Blockly.JavaScript.ORDER_NONE];
    return code;
};