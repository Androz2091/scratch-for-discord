import Blockly from "blockly/core";

const blockName = "s4d_av_url_update";

const blockData = {
    "message0": "%1 Avatar Url",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "Old",
                    "OA"
                ],
                [
                    "New",
                    "NA"
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
    if(searchType === "OA"){
        const code = ["oldAvatarURL", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NA"){
        const code = ["newAvatarURL", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};