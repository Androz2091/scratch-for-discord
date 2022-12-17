import Blockly from "blockly/core";

const blockName = "jg_other_setvalue";

const blockData = {
    "message0": "set %1 to %2",
    "inputsInline": true,
    "colour": "#D14081",
    "args0": [
        {
        "type": "input_value", 
        "name": "input",
        "check": null
        },
        {
        "type": "input_value", 
        "name": "replace",
        "check": null
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set something to another thing.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const input = Blockly.JavaScript.valueToCode(block, "input", Blockly.JavaScript.ORDER_ATOMIC);
    const replace = Blockly.JavaScript.valueToCode(block, "replace", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${input} = ${replace}
    `;
    return code;
};
