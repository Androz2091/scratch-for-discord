import * as Blockly from "blockly/core";

const s4d_login = {
    "type": "block_type",
    "message0": "%{BKY_LOGIN}",
    "args0": [
        {
            "type": "input_value",
            "name": "TOKEN",
            "check": "String"
        }
    ],
    "colour": "#F46580",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["s4d_login"] = {
    init: function() {
        this.jsonInit(s4d_login);
    }
};

Blockly.JavaScript["s4d_login"] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "TOKEN", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4d.client.login(${value});\n`;
    return code;
};
