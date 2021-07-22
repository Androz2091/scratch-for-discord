import * as Blockly from "blockly/core";

const blockName = "s4d_send_button";

const blockData = {
    "message0": "%{BKY_SEND_BUTTON}",
    "args0": [
        {
            "type": "input_value",
            "name": "BUTTON",
            "check": ["Button" , "ButtonRow"]
        },
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "String", "Number","MessageEmbed" ]  
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
      },
}

Blockly.JavaScript[blockName] = function(block){
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const button = Blockly.JavaScript.valueToCode(block, "BUTTON", Blockly.JavaScript.ORDER_ATOMIC);
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    if(block.getInput("CONTENT").connection.targetConnection){
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
        block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
        null;
        if((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")){
            const code = `${channel}.send(${content},${button});\n`;
            return code;
        } else {
            const code = `${channel}.send(String(${content}),${button});\n`;
            return code;
        }
    } else {
        const code = `${channel}.send(String(${content}),${button});\n`;
        return code;
    }
};
