import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_message_channel_raw";

const blockData = {
    "message0": "%{BKY_MESSAGE_CHANNEL_RAW}",
    "args0": [
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
    "output": "String",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = ["(s4dmessage.channel || {}).id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NAME"){
        const code = ["(s4dmessage.channel || {}).name", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message"
        ]
    }
]);
