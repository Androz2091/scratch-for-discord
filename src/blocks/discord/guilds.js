import * as Blockly from "blockly";

const get_guild = {
    "message0": "%{BKY_GET_GUILD}",
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

Blockly.Blocks["discord4stratch_get_guild"] = {
    init: function() {
        this.jsonInit(get_guild);
    }
};

Blockly.JavaScript["discord4stratch_get_guild"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    if(searchType === "name"){
        const code = [
            `discord4stratch.client.guilds.find((guild) => guild.name === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    } else {
        const code = [
            `discord4stratch.client.guilds.find((guild) => guild.id === ${value})`,
            Blockly.JavaScript.ORDER_NONE
        ];
        return code;
    }
};
