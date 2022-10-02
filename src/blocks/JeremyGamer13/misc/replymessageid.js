import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "reply_message_id";

const blockData = {
    "message0": "reply message ID",
    "colour": "#5BA58C",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
    const code = ["s4d.message.id", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_SEND_WAIT_REPLY_VALUE_PARENT",
        types: [
            "s4d_send_wait_reply"
        ]
    }
]);
