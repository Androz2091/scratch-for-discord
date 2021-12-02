import * as Blockly from "blockly/core";

const blockName = "s4d_login";

function colourRandom() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
}

const blockData = {
    "type": "block_type",
    "message0": "%{BKY_LOGIN}",
    "args0": [
        {
            "type": "input_value",
            "name": "TOKEN",
            "check": [ "String","Env" ]
        }
    ],
    "colour": (colourRandom()),
    "tooltip": "%{BKY_LOGIN_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "TOKEN", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `await s4d.client.login(${value}).catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });\n`;
    return code;
};
