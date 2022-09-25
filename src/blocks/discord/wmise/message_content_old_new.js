import * as Blockly from "blockly/core";


const blockName = "redo_maybe_idk_jg_newmsg_edit_original_new_message_content";

const blockData = {
    "message0": "%1 message content",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
                [
                    "new",
                    'new'
                ],
                [
                    "original",
                    'old'
                ]
            ],
        }
    ],
    "colour": "#5BA58C",
    "tooltip": "The content of the original message, or the new message.",
    "output": "String"
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const type = block.getFieldValue("TYPE")
    const code = [`${type}Message.content`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
