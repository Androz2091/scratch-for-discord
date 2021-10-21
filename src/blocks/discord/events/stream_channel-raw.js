import Blockly from "blockly/core";

const blockName = "s4d_stream_channel_raw";

const blockData = {
    "message0": "%1 of streaming channel",
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
                  "bitrate",
                  "BIT"
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
        const code = ["voiceChannel.id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NAME"){
        const code = ["voiceChannel.name", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "BIT"){
        const code = ["voiceChannel.bitrate", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};