import * as Blockly from "blockly/core";

const blockName = "s4d_update";

const blockData = {
    "message0": "%{BKY_UPDATE}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": ["String", "Number", "MessageEmbed", "embed"]
        },
        {
            "type": "input_value",
            "name": "BUTTON",
            "check": ["ButtonRow", "ButtonMenu"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
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
    },
}

Blockly.JavaScript[blockName] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const button = Blockly.JavaScript.valueToCode(block, "BUTTON", Blockly.JavaScript.ORDER_ATOMIC);
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    if (block.getInput("CONTENT").connection.targetConnection) {
        const contentType = block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_ ?
            block.getInput("CONTENT").connection.targetConnection.getSourceBlock().outputConnection.check_[0] :
            null;
        if ((contentType === "MessageEmbed") || (!contentType && typeof contentType === "object")) {
            if (contentType === "MessageEmbed") {
                const code = `await i.update({${content},components:[${button}]}).then(async m=>{
                ${statements}
            });\n`;
                return code;
            } else {
                const code = `await i.update({${content},components:[${button}]}).then(async m=>{
                ${statements}
            });\n`;
                return code;
            }
        } else if ((contentType === "embed") || (!contentType && typeof contentType === "object")) {
            const code = `await i.update({ embeds:[${content}],components:[${button}]}).then(async m=>{
                ${statements}
            });\n`;
            return code;
        } else {
            const code = `await i.update({ content: String(${content}),components:[${button}]}).then(async m=>{
                ${statements}
            });\n`;
            return code;
        }
    } else {
        const code = `await i.update({ content: String(${content}),components:[${button}]}).then(async m=>{
            ${statements}
        });\n`;
        return code;
    }
};
