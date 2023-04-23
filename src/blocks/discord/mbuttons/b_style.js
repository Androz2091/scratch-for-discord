import * as Blockly from "blockly";


const blockName = "b_style";

const blockData = {
    "message0": "%{BKY_B_STYLE}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "Blurple",
                    "'PRIMARY'"
                ],
                [
                    "Grey",
                    "'SECONDARY'"
                ],
                [
                    "Green",
                    "'SUCCESS'"
                ],
                [
                    "Red",
                    "'DANGER'"
                ],
                [
                    "Link",
                    "'LINK'"
                ]
            ]
        }
    ],
    "output": "bstyle",
    "colour": "#4C97FF",
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
    const code = [`${searchType}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};