import * as Blockly from "blockly/core";

const blockName = "s4d_channel_guild_id";

const blockData = {
    "message0": "ID of channel server %1",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        }
    ],
    "colour": "#4C97FF",
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
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    return [ `${channel}.guildId`, Blockly.JavaScript.ORDER_NONE ];
};
