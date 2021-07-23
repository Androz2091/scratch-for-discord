import * as Blockly from "blockly/core";


const blockName = "s4d_create_embed_then";

const blockData = {
    "message0": "who %3 channel %4 Permissions %2 %1",
    "args0": [{
            "type": "input_statement",
            "name": "THEN"
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



