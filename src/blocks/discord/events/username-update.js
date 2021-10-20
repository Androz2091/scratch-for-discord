import Blockly from "blockly/core";

const blockName = "s4d_username_update";

const blockData = {
    "message0": "%1 Username",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "Old",
                    "ON"
                ],
                [
                    "New",
                    "NN"
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
    if(searchType === "ON"){
        const code = ["oldUsername",Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NN"){
        const code = ["newUsername",Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};