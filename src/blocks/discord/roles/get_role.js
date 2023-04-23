import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_get_role";

const blockData = {
    "message0": "%{BKY_GET_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "VALUE",
            "check": "String"
        },
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "%{BKY_NAME}",
                    "NAME"
                ],
                [
                    "id",
                    "ID"
                ]
            ]
        },
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        },
    ],
    "colour": "#2EB66B",
    "output": "Role",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript[blockName] = function(block){
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    const searchType = block.getFieldValue("SEARCH_TYPE");
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    if(searchType === "NAME"){
        if(server !== null){
            return [ `${server}.roles.cache.find((role) => role.name === ${value})`, Blockly.JavaScript.ORDER_NONE ];
        } else {
            return [ `false`, Blockly.JavaScript.ORDER_NONE ];
        }
    } else {
        if(server !== null){
            return [ `${server}.roles.cache.get(${value})`, Blockly.JavaScript.ORDER_NONE ];
        } else {
            return [ `false`, Blockly.JavaScript.ORDER_NONE ];
        }
    }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_GET_ROLE_VALUE",
        types: [
            "VALUE"
        ]
    }
]);
