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
                    "Message"
                ],
                [
                    "user",
                    "User"
                ],
                [
                    "member",
                    "Member"
                ],

            ]
        }
    ],
    "colour": "#4C97FF",
    "output": ["String", "Member", "Channel", "Role"],
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
    if(searchType === 'Message') {
        const code = [`interaction.options.getMessage()`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === 'User') {
        const code = [`interaction.options.getUser()`, Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === 'Member') {
        const code = [`interaction.options.getMember()`, Blockly.JavaScript.ORDER_NONE];
        return code;
    }


};