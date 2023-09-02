import Blockly from "blockly/core";

const blockName = "s4d_switch_chnl";

const blockData = {
    "message0": "%1 channel",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "Old",
                    "OLD"
                ],
                [
                    "New",
                    "NEW"
                ]
            ]
        }
    ],
    "output": "Channel",
    "colour": "#a55b80",
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
    if(searchType === "OLD"){
        const code = ["oldChannel", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else {
        const code = ["newChannel", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};