import * as Blockly from "blockly/core";

const s4d_reply = {
    "message0": "%{BKY_REPLY}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "String", "MessageEmbed" ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["s4d_reply"] = {
    init: function() {
        this.jsonInit(s4d_reply);
    }
};

Blockly.JavaScript["s4d_reply"] = function(block){
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4d.message.channel.send(${content});\n`;
    return code;
};
