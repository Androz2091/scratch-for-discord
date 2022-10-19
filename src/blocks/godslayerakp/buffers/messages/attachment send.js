import Blockly from "blockly/core";

const blockname = "gsa_send_new_attachment_in_channel"

Blockly.Blocks[blockname] = {
    init: function () {
        this.jsonInit({
            "message0": "send attachment with name %2 and content %1 to %4 with message content %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "buffer",
                    "check": "buffer"
                },
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                },
                {
                    "type": "input_value",
                    "name": "content",
                    "check": "String"
                },
                {
                    "type": "input_value",
                    "name": "channel",
                    "check": ["Channel", "Member"]
                }
            ],
            "colour": "#4C97FF",
            "previousStatement": null,
            "nextStatement": null,
            "tooltip": "Sends back file to the page.",
            "helpUrl": ""
        });
    }
}
Blockly.JavaScript[blockname] = function (block) {
    const buffer = Blockly.JavaScript.valueToCode(block, "buffer", Blockly.JavaScript.ORDER_ATOMIC);
    const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
    const content = Blockly.JavaScript.valueToCode(block, "content", Blockly.JavaScript.ORDER_ATOMIC);
    const channel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `const attachment = new Discord.MessageAttachment(${buffer}, ${name})
${channel}.send({
    content: ${content}
    files: [attachment]
})
`;
    return code;
};