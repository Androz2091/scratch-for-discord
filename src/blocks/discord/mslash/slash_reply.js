import * as Blockly from "blockly/core";


const blockName = "slash_reply";

const blockData = {
    "message0": "%{BKY_S_REPLY}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": ["Number", "String", "Embed", "MessageEmbed"]
        },
        {
            "type": "input_value",
            "name": "BOOLEAN",
            "check": ["Boolean"]
        },
        {
            "type": "input_value",
            "name": "BUTTON",
            "check": ["String", "ButtonRow", "ButtonMenu"]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC) || "No content"
    const boolean = Blockly.JavaScript.valueToCode(block, "BOOLEAN", Blockly.JavaScript.ORDER_ATOMIC) || true
    const button = Blockly.JavaScript.valueToCode(block, "BUTTON", Blockly.JavaScript.ORDER_ATOMIC);
    let text1 = button.replace("'", "")
    let button2 = text1.replace("'", "")
    if (block.getInput("CONTENT").connection.targetConnection) {
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
            block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
            null;
        if ((contentType === "Embed")) {
            const code = `await interaction.reply({ embeds: [${content}], ephemeral: ${boolean}, components: [${button2}] });\n`;
            return code;
        } else if ((contentType === "MessageEmbed")) {
            const code = `await interaction.reply({${content}});\n`;
            return code;
        } else {
            const code = `await interaction.reply({ content: ${content}, ephemeral: ${boolean} || false, components: [${button2}] });\n`;
            return code;
        }
    } else {
        const code = `await interaction.reply({ content: ${content}, ephemeral: ${boolean} , components: [${button2}] });\n`;
        return code;
    }
};
