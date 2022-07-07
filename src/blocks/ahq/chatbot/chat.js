import * as Blockly from "blockly";
const blockName = "chat_ahq";
const blockData = {
    "message0": "chat message %1 %2 bot name %3 %4 user ID %5 %6 channel %7",
    "args0": [
        {
            "type": "input_value",
            "name": "Label",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "user",
            "check": "String"
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "channel",
            "check": "Channel"
        }
    ],
    "colour": '#40BF4A',
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const name = Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE);
    const statementsThen = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const code = `client.chat({message:${statementsThen}, name:${name}, owner:"scratch-for-discord-469-dev-ahqminessyt", user: 849690256945184828, language:"en"}).then(reply => {
        ${Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_NONE)}.send(String(reply));
        });`;
    return code;
};