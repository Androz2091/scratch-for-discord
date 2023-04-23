import Blockly from "blockly/core";

const blockName = "start_pagination";

const blockData = {
    "message0": "start pagination. message %1 emoji1 %2 emoji2 %3 timeout %4 embeds %5",
    "args0": [
		{
          "type": "input_value",
          "name": "MESSAGE",
          "check": "Message"
        },
        {
            "type": "input_value",
            "name": "EMOJI1",
            "check": [ "Number", "String" ]
        },
        {
            "type": "input_value",
            "name": "EMOJI2",
            "check": [ "Number", "String" ]
        },
        {
            "type": "input_value",
            "name": "TIMEOUT",
            "check": [ "Number", "String" ]
        },
        {
            "type": "input_value",
            "name": "EMBEDS",
            "check": [ "Message_Embed", "Embed","Embeds" ]
        },
    ],
    "colour": "#5BA55B",
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

Blockly.JavaScript[blockName] = function(block) {
	const message = Blockly.JavaScript.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC) || null;
    const emoji1 = Blockly.JavaScript.valueToCode(block, "EMOJI1", Blockly.JavaScript.ORDER_ATOMIC) || null;
    const emoji2 = Blockly.JavaScript.valueToCode(block, "EMOJI2", Blockly.JavaScript.ORDER_ATOMIC) || null;
    const timeout = Blockly.JavaScript.valueToCode(block, "TIMEOUT", Blockly.JavaScript.ORDER_ATOMIC) || null;
    const embeds = Blockly.JavaScript.valueToCode(block, "EMBEDS", Blockly.JavaScript.ORDER_ATOMIC) || null;
    return `paginationEmbed(${message}, ${embeds}, ['${emoji1}', '${emoji2}'],${timeout});\n`;
};