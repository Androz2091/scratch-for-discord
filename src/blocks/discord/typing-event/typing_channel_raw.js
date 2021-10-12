import Blockly from "blockly/core";


const blockName = "s4d_typing_channel_raw";

const blockData = {
    "message0": "%{BKY_TYPING_CHANNEL_RAW}",
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
        const code = ["s4dTyping.channel.id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NAME"){
        const code = ["s4dTyping.channel.name", Blockly.JavaScript.ORDER_NONE];
        return code;
            } else if(searchType === "TYPE"){
        const code = ["s4dTyping.channel.type", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};


