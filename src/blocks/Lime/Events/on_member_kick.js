import * as Blockly from "blockly/core";

const blockName = "lime_kick_event"


const blockData = {
    "type": "lime_kick_event",
    "message0": "When a member is kicked/leaving from the server %1 %2",
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
    "tooltip": "When a member leaves and when a member gets kicked event is the same!",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function (block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');

    var code = `s4d.client.on('guildMemberRemove', async (kickmember) => {\n ${statements_code} \n });\n`;
    return code;
};