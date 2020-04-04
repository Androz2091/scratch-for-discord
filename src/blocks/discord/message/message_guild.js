import * as Blockly from "blockly";

const s4d_message_guild = {
    "message0": "%{BKY_MESSAGE_GUILD}",
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
    "colour": "#9966FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["s4d_message_guild"] = {
    init: function() {
        this.jsonInit(s4d_message_guild);
    }
};

Blockly.JavaScript["s4d_message_guild"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = ["(s4d.message.guild || {}).id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NAME"){
        const code = ["(s4d.message.guild || {}).name", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};
