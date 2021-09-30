import * as Blockly from "blockly/core";


const blockName = "button_edit";

const blockData = {
    "message0": "%{BKY_B_EDIT}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "Number", "String", "Embed", "MessageEmbed" ]
        },
        {
            "type": "input_value",
            "name": "BUTTON",
            "check": [ "String" ]
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

    const button = Blockly.JavaScript.valueToCode(block, "BUTTON", Blockly.JavaScript.ORDER_ATOMIC);
    let text1 = button.replace("'","")
    let button2 = text1.replace("'","")
    if(block.getInput("CONTENT").connection.targetConnection){
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
        block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
        null;
        if((contentType === "Embed") || (!contentType && typeof contentType === "object")){
            const code = `await interaction.update({ embeds: [${content}], components: [${button2}] });\n`;
            return code;
        } else if((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            const code = `await interaction.update({${content}});\n`;
            return code;
        } else {
            const code = `await interaction.update({ content: ${content}, components: [${button2}] });\n`;
            return code;
        }
    } else {
        const code = `await interaction.update({ content: ${content}, components: [${button2}] });\n`;
        return code;
    }
};