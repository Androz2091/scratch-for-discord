import * as Blockly from "blockly/core";

const blockName = "s4d_joined_at";

const blockData = {
    "message0": "%{BKY_JOINED_AT}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        },
    ],
    "colour": "#187795",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    return [ `(${member}.joinedAt)`, Blockly.JavaScript.ORDER_NONE ];
};