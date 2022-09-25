import * as Blockly from "blockly/core";

const blockName = "unbanned_event"


const blockData = {
    "type": "unbanned_event",
    "message0": "When a member is unbanned %1 %2",
    "args0": [
    {
        "type": "input_dummy"
    },
    {
        "type": "input_statement",
        "name": "code"
    }
    ],
    "colour": "#f79400",
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript['unbanned_event'] = function(block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');

    var code = `s4d.client.on('guildBanRemove', async (unban) => {\n ${statements_code} \n });\n`;
    return code;
};