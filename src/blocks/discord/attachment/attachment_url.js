import Blockly from "blockly/core";

const blockName = "att_url";

const blockData = {
    "message0": "attachment url of message %1",
    "args0": [
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check":  "Message" 
        },
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
    const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`(${message}.attachments.first()).url`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
