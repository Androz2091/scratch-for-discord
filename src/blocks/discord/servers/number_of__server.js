import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_number_of__server";

const blockData = {
    "message0": "%{BKY_NUMBER_OF__SERVER}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        },
        {
            "type": "field_dropdown",
            "name": "OF_THIS",
            "options": [
                [
                    "%{BKY_BOT}",
                    "BOT"
                ],
                [
                    "%{BKY_MEMBERS}",
                    "MEMBERS"
                ],
                [
                    "%{BKY_CHANNELS}",
                    "CHANNELS"
                ],
                [
                    "%{BKY_ROLES}",
                    "ROLES"
                ],
                [
                    "%{BKY_VOICE_CHANNEL}",
                    "VOICE"
                ],
                [
                    "%{BKY_TEXT_CHANNEL}",
                    "TEXT"
                ]
            ]
        }
    ],
    "colour": "#e07e6c",
    "output": "Number",
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const type = block.getFieldValue("OF_THIS");
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    var code = "0";
    if(type === "BOT"){
        code = `${server}.members.cache.filter(m => m.user.bot).size`
    }else if(type === "MEMBERS"){
        code = `${server}.members.cache.filter(m => !m.user.bot).size`
    }else if(type === "CHANNELS"){
        code = `${server}.channels.cache.size`
    }else if(type === "ROLES"){
        code = `${server}.roles.cache.size`
    }else if(type === "VOICE"){
        code = `${server}.channels.cache.filter(m => m.type === "GUILD_VOICE").size`
    }else if(type === "TEXT"){
        code = `${server}.channels.cache.filter(m=>m.type === "GUILD_TEXT").size`
    }
    return [ code , Blockly.JavaScript.ORDER_NONE ];
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
