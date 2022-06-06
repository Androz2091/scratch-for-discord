import Blockly from "blockly/core";
Blockly.Blocks["jg_messages_id_of_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "ID of message %1",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "String",
                "tooltip": "Get the message ID from the message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_id_of_message"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.id`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
/*
// next block
Blockly.Blocks["jg_messages_message_mentions_everyone"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 mentions everyone?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message contains the @everyone ping.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_mentions_everyone"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.mentions.everyone`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_messages_message_is_a_system_message"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 is a system message?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is a system message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_a_system_message"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.system`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_messages_message_is_pinned"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 is pinned?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is pinned at all.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_pinned"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.pinned`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
// next block
Blockly.Blocks["jg_messages_message_is_text_to_speech"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 is text to speech?",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is a text to speech message.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_text_to_speech"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`${message}.tts`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
*/
// next block
Blockly.Blocks["jg_messages_message_is_value"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "message %1 %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "MSG",
                        "check": "Message"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "mentions everyone?",
                                'mentions.everyone'
                            ],
                            [
                                "is a system message?",
                                'system'
                            ],
                            [
                                "is pinned?",
                                'pinned'
                            ],
                            [
                                "is text to speech?",
                                'tts'
                            ]
                        ],
                    }
                ],
                "colour": "#4C97FF",
                "output": "Boolean",
                "tooltip": "Check if a message is a message with this property.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_messages_message_is_value"] = function (block) {
    const message = Blockly.JavaScript.valueToCode(block, "MSG", Blockly.JavaScript.ORDER_ATOMIC);
    const property = block.getFieldValue("TYPE")
    const code = [`${message}.${property}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};