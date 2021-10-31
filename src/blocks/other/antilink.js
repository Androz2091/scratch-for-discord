import * as Blockly from "blockly/core";

const blockName = "anti_link";

const blockData = {
    "message0": "Anti Link Message %1",
    "args0": [
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": "Message"
        }
    ],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    return `antilink.handleMessages(${message});\n`;
};