import * as Blockly from "blockly/core";

const blockName = "qr";

const blockData = {
    "message0": "QRCode",
    "colour": "#40BF4A",
	"args0": [],
    "tooltip": "QR code",
    "output": "String",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  const code = [`QR`, Blockly.JavaScript.ORDER_NONE];
  return code;
};
