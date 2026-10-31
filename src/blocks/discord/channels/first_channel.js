import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_first_channel";

const blockData = {
    "message0": "%{BKY_FIRST_CHANNEL}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        }
    ],
    "colour": "#a55b80",
    "output": "Channel",
    "tooltip": "%{BKY_FIRST_CHANNEL_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const server = javascriptGenerator.valueToCode(block, "SERVER", Order.ATOMIC);
    // The highest text channel in the list where the bot may talk
    return [ `${server}.channels.cache.filter((channel) => channel.type === Discord.ChannelType.GuildText).filter((channel) => channel.permissionsFor(s4d.client.user).has(Discord.PermissionFlagsBits.SendMessages)).sort((a, b) => a.position - b.position).first()`, Order.NONE ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_SERVER",
        types: [
            "SERVER"
        ]
    }
]);
