import Blockly from "blockly/core";

const blockName = "s4d_discrim_update";

const blockData = {
    "message0": "%1 Discriminator",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "Old",
                    "OD"
                ],
                [
                    "New",
                    "ND"
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
    if(searchType === "OD"){
        const code = ["oldDiscriminator",Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "ND"){
        const code = ["newDiscriminator",Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};