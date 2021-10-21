import Blockly from "blockly/core";


const blockName = "s4d_old_channel_raw";

const blockData = {
    "message0": "%1 of old channel",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "name",
                    "NAME"
                ],
                [
                    "id",
                    "ID"
                ],
                [
                  "type",
                  "TYPE"
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
        const code = ["oldChannel.id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NAME"){
        const code = ["oldChannel.name", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "TYPE"){
        const code = ["oldChannel.type", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};
