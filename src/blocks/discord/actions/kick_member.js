import Blockly from "blockly/core";

const s4d_kick_member = {
    "message0": "%{BKY_KICK_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["s4d_kick_member"] = {
    init: function() {
        this.jsonInit(s4d_kick_member);
    }
};

Blockly.JavaScript["s4d_kick_member"] = function(block) {
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${member}.kick();\n`;
    return code;
};
