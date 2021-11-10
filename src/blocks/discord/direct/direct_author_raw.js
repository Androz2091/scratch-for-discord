import * as Blockly from "blockly";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_direct_author_raw";

const blockData = {
    "message0": "%{BKY_DIRECT_AUTHOR_RAW}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "%{BKY_USERNAME}",
                    "USERNAME"
                ],
                [
                    "%{BKY_DISCRIMINATOR}",
                    "DISCRIMINATOR"
                ],
                [
                    "id",
                    "ID"
                ],
                [
                    "%{BKY_TAG}",
                    "TAG"
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
        const code = ["s4dmessage.author.id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "USERNAME"){
        const code = ["s4dmessage.author.username", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "DISCRIMINATOR"){
        const code = ["s4dmessage.author.discriminator", Blockly.JavaScript.ORDER_NONE];
        return code;
    }else if(searchType === "TAG"){
        const code = ["s4dmessage.author.tag", Blockly.JavaScript.ORDER_NONE];
        return code
    }
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_direct"
        ]
    }
]);
