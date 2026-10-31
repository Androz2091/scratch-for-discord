import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_send_wait_reply_value";

const blockData = {
    "message0": "%{BKY_SEND_WAIT_REPLY_VALUE}",
    "colour": "#5BA58C",
    "output": "String",
    "tooltip": "%{BKY_SEND_WAIT_REPLY_VALUE_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(){
    const code = ["s4d.reply", Order.NONE];
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
