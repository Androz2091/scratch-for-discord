import * as Blockly from "blockly/core";

const blockName = "add_channel";

const blockData = {
    "message0": "add channel id %1",
    "args0": [
        {
          "type": "input_value",
          "name": "ID",
          "check": [ "Number", "String" ]
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
	const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `s4d.notifer.addChannels([${id}])`;
    return code;
};

