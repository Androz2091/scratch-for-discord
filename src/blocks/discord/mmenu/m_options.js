import * as Blockly from "blockly";


const blockName = "c_options";

const blockData = {
    "message0": "Get %1 option",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH",
            "options": [
                [
                    "message",
                    "options._hoistedOptions[0].message.content"
                ],
                [
                    "user",
                    "targetUser"
                ],
                [
                    "member",
                    "targetMember"
                ],

            ]
        }
    ],
    "colour": "#4C97FF",
    "output": ["String", "Member", "User"],
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const searchType = block.getFieldValue("SEARCH");
    return [`interaction.${searchType}`, Blockly.JavaScript.ORDER_NONE];
};
