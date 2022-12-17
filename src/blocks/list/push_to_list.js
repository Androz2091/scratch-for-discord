import Blockly from "blockly/core";

const blockName = "push_to_list";

const blockData = {
    "message0": "in list %1 push %2",
    "args0": [
        {
            "type": "input_value",
            "name": "LIST",
            "check":"Array"
        },
        {
            "type": "input_value",
            "name": "PUSH",
            "check":["Number","String","Member","Channel","Array","Boolean","Role","Server"]
        },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.setStyle('list_blocks');
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const list = Blockly.JavaScript.valueToCode(block, "LIST", Blockly.JavaScript.ORDER_ATOMIC);
    const push = Blockly.JavaScript.valueToCode(block, "PUSH", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${list}.push(${push});\n`
    return code;
};
