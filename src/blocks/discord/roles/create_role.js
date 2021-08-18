import * as Blockly from "blockly/core";

const blockName = "s4d_create_role";

const blockData = {
    "message0": "%{BKY_CREATE_ROLE}",
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
            "type":"input_value",
            "name":"COLOR",
            "check":"Colour"
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
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const color = Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC)
    const code = `${server}.roles.create({ name: ${name},color:${color} });\n`;
    return code;
};