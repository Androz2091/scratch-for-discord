import Blockly from "blockly/core";

const blockName = "s4d_typing_time";

const blockData = {
    "message0": "%{BKY_TYPING_TIMESTAMP}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "%{BKY_START_TYPING_TIMESTAMP}",
                    "TT"
                ],
                [
                    "%{BKY_START_TYPING_TIMESTAMP}",
                    "TA"
                ]
            ]
        }
    ],
    "output": "Date",
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
    if(searchType === "TA"){
        const code = ["s4dTyping.startedAt", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "TT"){
        const code = ["s4dTyping.startedTimestamp", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};

