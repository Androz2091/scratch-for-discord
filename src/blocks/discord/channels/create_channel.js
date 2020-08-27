import * as Blockly from "blockly/core";

const blockName = "s4d_create_channel";

const blockData = {
    "message0": "%{BKY_CREATE_CHANNEL}",
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "SERVER",
            "check": [ "Server" ]
        },
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "%{BKY_TEXT}",
                    "TEXT"
                ],
                [
                    "%{BKY_VOICE}",
                    "VOICE"
                ],
                [
                    "%{BKY_CATEGORY}",
                    "CATEGORY"
                ]
            ]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": false,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const type = block.getFieldValue("TYPE");
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${server}.channels.create(${name}, {
        type: '${type.toLowerCase()}'
    });\n`;
    return code;
};
