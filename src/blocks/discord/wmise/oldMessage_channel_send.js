import * as Blockly from "blockly/core";


const blockName = "s4d_reply_oldmsg";

const blockData = {
    "message0": "%{BKY_O_MSG_C_SEND}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "Number", "String", "MessageEmbed" ]
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
    }
};

Blockly.JavaScript[blockName] = function(block){
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    if(block.getInput("CONTENT").connection.targetConnection){
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
        block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
        null;
        if((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")){
            const code = `oldMessage.channel.send({${content}});\n`;
            return code;
        } else {
            const code = `oldMessage.channel.send({content:String(${content})});\n`;
            return code;
        }
    } else {
        const code = `oldMessage.channel.send({content:String(${content})});\n`;
        return code;
    }
};