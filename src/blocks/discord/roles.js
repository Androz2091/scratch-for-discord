import * as Blockly from "blockly";

const get_role = {
    "message0": "%{BKY_GET_ROLE}",
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
                    "%{BKY_NAME}",
                    "NAME"
                ]
            ]
        }
    ],
    "output": "Server",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["discord4stratch_get_role"] = {
    init: function() {
        this.jsonInit(get_role);
    }
};

Blockly.JavaScript["discord4stratch_get_role"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    if(searchType === "name"){
        const code = [
            `${server}.roles.cache.find((role) => role.name === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    } else {
        const code = [
            `${server}.roles.cache.find((role) => role.id === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    }
};

const add_role = {
    "message0": "%{BKY_ADD_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "ROLE",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Membre"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["discord4stratch_add_role"] = {
    init: function() {
        this.jsonInit(add_role);
    }
};

Blockly.JavaScript["discord4stratch_add_role"] = function(block) {
    const role = Blockly.JavaScript.valueToCode(block, "ROLE", Blockly.JavaScript.ORDER_ATOMIC);
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [
        `${member}.roles.add(${role.id})`,
        Blockly.JavaScript.ORDER_NONE
    ];
    return code;
};
