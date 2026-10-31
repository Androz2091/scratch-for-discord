import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_member_voice_channel";

const blockData = {
    "message0": "%{BKY_MEMBER_VOICE_CHANNEL}",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        }
    ],
    "colour": "#a55b80",
    "output": "Channel",
    "tooltip": "%{BKY_MEMBER_VOICE_CHANNEL_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const member = javascriptGenerator.valueToCode(block, "MEMBER", Order.ATOMIC);
    return [ `${member}.voice.channel`, Order.MEMBER ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_MEMBER",
        types: [
            "MEMBER"
        ]
    }
]);
