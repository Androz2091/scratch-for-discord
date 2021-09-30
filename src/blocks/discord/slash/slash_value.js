import * as Blockly from "blockly";
import { registerRestrictions } from "../../../restrictions";


const blockName = "s4d_slash_value";

const blockData = {
    "message0": "%{BKY_SLASH_VALUE}",
    "args0": [
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
                ]

            ]
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": "String",
        },
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
    const string = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const searchType = block.getFieldValue("SEARCH");
    
        const code = [`s4dInteraction.options.get${searchType}(${string})`, Blockly.JavaScript.ORDER_NONE];
        return code;
    
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_SLASH",
        types: [
            "s4d_on_slash"
        ]
    },
    {
        type: "notempty",
        message: "RES_MISSING_SLASH_NAME",
        types: [
          "NAME"
        ]
    }
    
]);
