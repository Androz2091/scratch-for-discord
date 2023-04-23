import * as Blockly from "blockly/core";
const blockName = "send_ahq_embed";
//block working now working
const blockData = {
    "message0": "Send Embeds %1",
    "args0": [{
        "type": "input_value",
        "name": "Label",
        "check": "String"
    }],
    "colour": '#40BF4A',
    "output": "MessageEmbed",
    "tooltip": "Sends a named embed.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const code = [`embeds: [${Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE).replace("'", "").replace("'", "")}]`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};
