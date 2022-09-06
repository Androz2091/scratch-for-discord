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
                    "interaction.options.getMessage('message')"
                ],
                [
                    "user",
                    "interaction.targetUser"
                ],
                [
                    "member",
                    "interaction.targetMember"
                ],

            ]
        }
    ],
    "colour": "#4C97FF",
    "output": ["Message", "Member", "User"],
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
    return [`${searchType}`, Blockly.JavaScript.ORDER_NONE];
};
