import * as Blockly from "blockly/core";


const blockName = "slash_edit";

const blockData = {
    "message0": "Interaction reply Edit %1 ",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "Number", "String", "Embed" ]
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
        if((contentType === "Embed") || (!contentType && typeof contentType === "object")){
            const code = `await interaction.editReply({ embeds: [${content}],  });\n`;
            return code;
        } else {
            const code = `await interaction.editReply({ content: ${content},  });\n`;
            return code;
        }
    } else {
        const code = `await interaction.editReply({ content: ${content}, });\n`;
        return code;
    }
};

