import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_get_msg_then";

const blockData = {
    "message0": "%{BKY_GET_MESSAGE_BY_ID}",
    "args0": [
        {
            "type": "input_value",
            "name": "ID",
            "check": [ "Number", "String" ]
        },
				{
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        },
        {
            "type": "input_statement",
            "name": "THEN"
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

Blockly.JavaScript[blockName] = function(block){
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
		const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `${channel}.messages.fetch(${id}).then(s4dmessage =>{\n ${statementThen} \n});`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message"
        ]
    }
]);
