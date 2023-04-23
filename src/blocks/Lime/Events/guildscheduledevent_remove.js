import * as Blockly from "blockly/core";

const blockName = "lime_guild_sheduled_events_remove"


const blockData = {
    "type": "lime_guild_sheduled_events_remove",
    "message0": "When a scheduled event is deleted %1 %2",
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
    init: function () {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function (block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');

    var code = `s4d.client.on('guildScheduledEventDelete', async (scheduledEvent) => {\n ${statements_code} \n });\n`;
    return code;
};