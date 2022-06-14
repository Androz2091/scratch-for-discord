import * as Blockly from "blockly/core";
const blockName = "ahq_embed_info";
//block working now working
const blockData = {
    "message0": "Embed on message %1 info: %2",
    "args0": [
        {
            "type": "input_value",
            "name": "member",
            "check": "Message"
        },
        {
            "type": "field_dropdown",
            "name": "INFO",
            "options": [
                [
                    "Title",
                    ".title"
                ],
                [
                    "Message/Description",
                    ".description"
                ],
                [
                    "Image",
                    ".image"
                ],
                [
                    "Thumbnail",
                    ".thumbnail"
                ],
                [
                    "url",
                    ".url"
                ],
                [
                    "Colour",
                    ".color"
                ]

            ],
        },

    ],
    "colour": '#40BF4A',
    "output": "String",
    "tooltip": "Get embed information from a message, if it has an embed on it.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const a = Blockly.JavaScript.valueToCode(block, "member", Blockly.JavaScript.ORDER_ATOMIC).replace(".user", "").replace(".author", ".member");
    const stats = block.getFieldValue("INFO");
    const code = [`String(${a}.embeds[0]${stats})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};