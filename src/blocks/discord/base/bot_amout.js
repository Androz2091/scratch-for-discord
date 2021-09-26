import * as Blockly from "blockly/core";

const blockName = "s4d_bot_amount";

const blockData = {
    "message0": "%{BKY_BOT_AMOUNT}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "T",
            "options": [
                [
                    "%{BKY_SERVERS}",
                    "servers"
                ],
                [
                    "%{BKY_USERS}",
                    "users"
                ],
                [
                    "%{BKY_CHANNELS}",
                    "channels"
                ]
            ]
        },
    ],
    "colour": "#4C97FF",
    "output":"String",
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
    const t =  block.getFieldValue("T");
		let code = ""
    if(t === "servers"){
			code = "s4d.client.guilds.cache.size"
		}else if(t === "channels"){
			code = "s4d.client.channels.cache.size"
		}else if(t === "users"){
			code = "s4d.client.users.cache.size"
		}
    return [code, Blockly.JavaScript.ORDER_NONE ];
};