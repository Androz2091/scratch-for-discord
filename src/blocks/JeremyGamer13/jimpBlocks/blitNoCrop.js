import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_blit";

const blockData = {
    "message0": "Blit image %1 without cropping at point X: %2 Y: %3",
    "args0": [
        {
            "type": "input_value",
            "name": "Image",
            "check": [ "String", "Number", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "xpos",
            "check": [ "Number", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "ypos",
            "check": [ "Number", "var", "Env"]
        }
    ],
    "colour": "#FF0000",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Adds another image onto the main image at a specific point without cropping the other image. Can only use Numbers, Variables, or Env secrets.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const img = Blockly.JavaScript.valueToCode(block, "Image", Blockly.JavaScript.ORDER_ATOMIC);
  const xpos = Blockly.JavaScript.valueToCode(block, "xpos", Blockly.JavaScript.ORDER_ATOMIC);
  const ypos = Blockly.JavaScript.valueToCode(block, "ypos", Blockly.JavaScript.ORDER_ATOMIC);
    return `image.blit( String(` + img + `), Number(` + xpos + `), Number(` + ypos + `))\n`;
}

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_JGSAVEIMAGE",
        types: [
            "jg_beginJimp"
        ]
    }
]);