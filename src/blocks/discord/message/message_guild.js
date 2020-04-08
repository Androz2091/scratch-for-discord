import * as Blockly from "blockly";
import { registerRestriction } from "../../../restrictions";

const blockName = "s4d_message_guild";

const blockData = {
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

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = ["(s4d.message.guild || {}).id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NAME"){
        const code = ["(s4d.message.guild || {}).name", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};

registerRestriction(blockName, {
    type: "toplevelparent",
    message: "RES_MUST_BE_IN_ON_MESSAGE",
    types: [
        "s4d_on_message"
    ]
});
