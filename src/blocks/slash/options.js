














import * as Blockly from "blockly";


const blockName = "options";

const blockData = {
    "message0": "%{BKY_S_OPTIONS}",
    "args0": [
        {
            "type": "input_value",
            "name": "BOOLEAN",
            "check": "String",
        },
        {
            "type": "field_dropdown",
            "name": "SEARCH",
            "options": [
                [
                    "string",
                    "String"
                ],
                [
                    "integer",
                    "Integer"
                ],
                [
                    "boolean",
                    "Boolean"
                ],
                [
                    "user",
                    "User"
                ],
                [
                    "member",
                    "Member"
                ],
                [
                    "channel",
                    "Channel"
                ],
                [
                    "role",
                    "Role"
                ],
                [
                    "subcommand",
                    "Subcommand"
                ],
                [
                    "subcommand group",
                    "SubcommandGroup"
                ],

            ]
        }
    ],
    "colour": "#4C97FF",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block) {
    const string = Blockly.JavaScript.valueToCode(block, "BOOLEAN", Blockly.JavaScript.ORDER_ATOMIC);
    const searchType = block.getFieldValue("SEARCH");
    
        const code = [`interaction.options.get${searchType}(${string})`, Blockly.JavaScript.ORDER_NONE];
        return code;
    
};




