import Blockly from "blockly/core";

const blockName = "att_name";

const blockData = {
    "message0": "attachment name of message %1",
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
    const code = [`(new URL.URL((${message}.attachments.first()).url)).pathname.split("/").reverse()[0]).split(".")[0]`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
