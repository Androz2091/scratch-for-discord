import * as Blockly from "blockly/core";
import "@blockly/field-grid-dropdown";

const blockName = "s4d_send_in_channel";

const blockData = {
    "message0": "%{BKY_SEND_IN_CHANNEL}",
    "args0": [
      {
        "type":"input_value",
        "name":"CONTENT",
        "check":["String","Number"]
      },
      {
        "type":"input_value",
        "name":"CHANNEL",
        "check":"Channel"
      },
			{
        "type":"input_value",
        "name":"GW",
        "check":["Goodbye","Welcome","Rankcard"]
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
		const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
		const gw = Blockly.JavaScript.valueToCode(block, "GW", Blockly.JavaScript.ORDER_ATOMIC);
let code = `${channel}.send({content:${content},files:[{attachment:${gw}.toBuffer()}]});\n`;
return code
};