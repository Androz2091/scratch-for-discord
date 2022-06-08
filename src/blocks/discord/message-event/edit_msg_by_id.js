import * as Blockly from "blockly/core";

const blockName = "edit_msg_by_id";

const blockData = {
    "message0": "Get message with the id of %1 in the channel %2 and edit it to %3",
    "args0": [{
            "type": "input_value",
            "name": "ID",
            "check": ["Number", "String"]
        },
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        },
        {
            "type": "input_value",
            "name": "EDIT",
            "check": "String"
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    const edit = Blockly.JavaScript.valueToCode(block, "EDIT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.messages.fetch(${id}).then(async (msg) => {
       msg.edit({
                    content: String(${edit})
                })
})
`;
    return code;
};