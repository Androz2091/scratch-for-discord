import * as Blockly from "blockly/core";


const blockName = "button_edit";

const blockData = {
    "message0": "Button Edit %1 Button %2",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "Number", "String", "Embed" ]
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
    if(block.getInput("CONTENT").connection.targetConnection){
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
        block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
        null;
        if((contentType === "Embed") || (!contentType && typeof contentType === "object")){
            const code = `await interaction.update({ embeds: [${content}], components: [${button}] });\n`;
            return code;
        } else {
            const code = `await interaction.update({ content: ${content}, components: [${button}] });\n`;
            return code;
        }
    } else {
        const code = `await interaction.update({ content: ${content}, components: [${button}] });\n`;
        return code;
    }
};

