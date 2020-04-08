import * as Blockly from "blockly/core";
import { registerRestriction } from "../../../restrictions";

const blockName = "s4d_reply";

const blockData = {
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

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().type;
    if(contentType === "s4d_message_embed"){
        const code = `s4d.message.channel.send({ embed: ${content} });\n`;
        return code;
    } else {
        const code = `s4d.message.channel.send(${content});\n`;
        return code;
    }
};

registerRestriction(blockName, {
    type: "toplevelparent",
    message: "RES_MUST_BE_IN_ON_MESSAGE",
    types: [
        "s4d_on_message"
    ]
});
