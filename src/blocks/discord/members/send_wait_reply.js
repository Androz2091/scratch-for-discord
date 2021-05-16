import * as Blockly from "blockly/core";

const blockName = "s4d_send_wait_reply_dm";

const blockData = {
    "message0": "%{BKY_SEND_WAIT_REPLY_DM}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "MessageEmbed", "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        },
        {
            "type": "input_value",
            "name": "TIME",
            "check": "Number"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        },
        {
            "type": "input_statement",
            "name": "CATCH"
        }
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
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const time = Blockly.JavaScript.valueToCode(block, "TIME", Blockly.JavaScript.ORDER_ATOMIC) || 5;
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    const statementCatch = Blockly.JavaScript.statementToCode(block, "CATCH");
    let code = "";
    if(block.getInput("CONTENT").connection.targetConnection){
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
        block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
        null;
        if((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")){
            code = `let msg = await ${member}.send(${content});\n`;
        } else {
            code = `let msg = await${member}.send(String(${content}));\n`;
        }
    } else {
        code = `let msg = await${member}.send(String(${content}));\n`;
    }
    code += `msg.channel.awaitMessages((m) => m.author.id === ${member}.id, { time: (${time}*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content; \n ${statementThen} \n s4d.reply = null; }).catch(async (e) => { console.error(e); ${statementCatch} });`;
    return code;
};

