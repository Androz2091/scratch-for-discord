import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { messageContent } from "../../utils";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_send_wait_reply";

const blockData = {
    "message0": "%{BKY_SEND_WAIT_REPLY}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "MessageEmbed", "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
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

javascriptGenerator.forBlock[blockName] = function(block){
    const channel = javascriptGenerator.valueToCode(block, "CHANNEL", Order.ATOMIC);
    const content = javascriptGenerator.valueToCode(block, "CONTENT", Order.ATOMIC);
    const member = javascriptGenerator.valueToCode(block, "MEMBER", Order.ATOMIC);
    const time = javascriptGenerator.valueToCode(block, "TIME", Order.ATOMIC) || 5;
    const statementThen = javascriptGenerator.statementToCode(block, "THEN");
    const statementCatch = javascriptGenerator.statementToCode(block, "CATCH");
    return `await ${channel}.send(${messageContent(block, content)});
${channel}.awaitMessages({ filter: (m) => m.author.id === ${member}.id, time: (${time}*60*1000), max: 1, errors: ["time"] }).then(async (collected) => {
s4d.reply = collected.first().content;
${statementThen}s4d.reply = null;
}).catch(async (e) => {
console.error(e);
${statementCatch}});
`;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_SEND_CHANNEL_CONTENT",
        types: [
            "CONTENT"
        ]
    },
    {
        type: "notempty",
        message: "RES_SEND_CHANNEL_CHANNEL",
        types: [
            "CHANNEL"
        ]
    }
]);
