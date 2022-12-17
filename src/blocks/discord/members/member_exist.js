import Blockly from "blockly/core";

const blockName = "s4d_member_exist";

const blockData = {
    "message0": "member %1 exist?",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check":  "Member" 
        },
    ],
    "output": "Boolean",
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`typeof ${member} !== undefined`, Blockly.JavaScript.ORDER_NONE ];
    return code;
    
};
