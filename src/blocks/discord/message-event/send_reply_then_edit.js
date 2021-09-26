import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_edit";

const blockData = {
    "message0": "%{BKY_EDIT}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "Number", "String", "MessageEmbed","embed" ]
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
            const code = `s4dreply.edit({${content}});\n`;
            return code;
        }else if((contentType === "embed") || (!contentType && typeof contentType === "object")){
            const code = `s4dreply.edit({embeds:[${content}]});\n`;
            return code;
        } else {
            const code = `s4dreply.edit(String(${content}));\n`;
            return code;
        }
    } else {
        const code = `s4dreply.edit(String(${content}));\n`;
        return code;
    }
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT_REPLY_EDIT",
        types: [
          "CONTENT"
        ]
    },
    {
        type: "hasparent",
        message: "RES_MUST_BE_IN_REPLY_THEN",
        types: [
            "s4d_reply_then"
        ]
    }
]);