import Blockly from "blockly/core";


const blockName = "has_role";

const blockData = {
    "message0": "%{BKY_HAS_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "ROLE",
            "check": [ "String", "Role" ]
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": [ "Member" ]
        },
    ],
    "colour": "#187795",
    "output": "Boolean",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const role = Blockly.JavaScript.valueToCode(block, "ROLE", Blockly.JavaScript.ORDER_ATOMIC);
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${member}.roles.cache.some(r=> r.id === ${role}.id)`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

