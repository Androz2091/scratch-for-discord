import * as Blockly from "blockly/core";


const blockName = "s4d_create_embed_thens";

const blockData = {
    "message0": "%{BKY_C_PERM}",
    "args0": [{
            "type": "input_statement",
            "name": "THENA"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": ["Member", "Role"]
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        },
        {
            "type": "input_statement",
            "name": "THEND"
        },
        {
            "type": "input_dummy"
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "THEN");
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.updateOverwrite(${member}, {\n${statements}\n});`
    return code;
};