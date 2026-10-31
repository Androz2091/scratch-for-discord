import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";
import { getInputType } from "../../utils";

const blockName = "s4d_message_with_menu";

const blockData = {
    "message0": "%{BKY_MESSAGE_WITH_MENU}",
    "args0": [
        {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "String", "Number", "MessageEmbed" ]
        },
        {
            "type": "input_value",
            "name": "MENU",
            "check": "SelectMenu"
        }
    ],
    "colour": "#5865F2",
    // Same kind of value as an embed: every send and reply block accepts it
    "output": "MessageEmbed",
    "inputsInline": false,
    "tooltip": "%{BKY_MESSAGE_WITH_BUTTONS_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const content = javascriptGenerator.valueToCode(block, "CONTENT", Order.ATOMIC);
    const menu = javascriptGenerator.valueToCode(block, "MENU", Order.NONE);
    const message = getInputType(block, "CONTENT") === "MessageEmbed" ? `...${content}` : `content: String(${content})`;
    return [ `{ ${message}, components: [{ type: Discord.ComponentType.ActionRow, components: [${menu}] }] }`, Order.ATOMIC ];
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
        message: "RES_MENU",
        types: [
            "MENU"
        ]
    }
]);
