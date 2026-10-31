import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_get_channel";

const blockData = {
    "message0": "%{BKY_GET_CHANNEL}",
    "args0": [
        {
            "type": "input_value",
            "name": "VALUE",
            "check": "String"
        },
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "%{BKY_NAME}",
                    "NAME"
                ],
                [
                    "id",
                    "ID"
                ]
            ]
        }
    ],
    "colour": "#a55b80",
    "output": "Channel",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

// Channel blocks send, read and delete messages: only server text channels can do all of that
const TEXT_CHANNELS = "s4d.client.channels.cache.filter((channel) => channel.isTextBased() && !channel.isDMBased())";

javascriptGenerator.forBlock[blockName] = function(block){
    const value = javascriptGenerator.valueToCode(block, "VALUE", Order.ATOMIC);
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "NAME"){
        return [ `${TEXT_CHANNELS}.find((channel) => channel.name === ${value})`, Order.ATOMIC ];
    } else {
        return [ `${TEXT_CHANNELS}.get(${value})`, Order.ATOMIC ];
    }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CHANNEL_VALUE",
        types: [
            "VALUE"
        ]
    }
]);
