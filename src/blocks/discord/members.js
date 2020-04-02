import * as Blockly from "blockly";

const get_member = {
    "message0": "%{BKY_GET_MEMBER}",
    "args0": [
        {
            "type": "input_value",
            "name": "VALUE",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        },
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "id",
                    "ID"
                ],
                [
                    "%{BKY_USERNAME}",
                    "USERNAME"
                ],
                [
                    "%{BKY_NICKNAME}",
                    "NICKNAME"
                ]
            ]
        }
    ],
    "output": "Member",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["discord4stratch_get_member"] = {
    init: function() {
        this.jsonInit(get_member);
    }
};

Blockly.JavaScript["discord4stratch_get_member"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    if(searchType === "ID"){
        const code = [
            `(${server}.members.cache.get(${value}) || await ${server}.members.cache.get(${value}))`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    } else if(searchType === "USERNAME"){
        const code = [
            `${server}.members.cache.find((member) => member.user.username === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    } else if(searchType === "NICKNAME"){
        const code = [
            `${server}.members.cache.find((member) => member.nickname && member.nickname === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    }
};

