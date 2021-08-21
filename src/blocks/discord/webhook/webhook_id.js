import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_webhook_id";

const blockData = {
    "message0": "%{BKY_WEBHOOK_ID}",
    "args0": [
    ],
    "colour": "#2EB66B",
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
return [ `webhook.id`, Blockly.JavaScript.ORDER_NONE ];
};
registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_CREATE_WEBHOOK_PARENT",
        types: [
            "s4d_create_webhook_then"
        ]
    }
]);
