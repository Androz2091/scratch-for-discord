import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_crop";

const blockData = {
    "message0": "Crop Image:%1 X: %2 Y: %3 Width %4 Height %5",
    "args0": [
        {
            "type": "input_dummy"
            // only exists to push the other part of the block down, xD
        },
        {
            "type": "input_value",
            "name": "X",
            "check": ["Number", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "Y",
            "check": ["Number", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "Width",
            "check": ["Number", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "Height",
            "check": ["Number", "var", "Env"]
        }
    ],
    "colour": 260,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Crop the image at a specific point and using a Width and Height. Can only use Numbers, Variables, or Env secrets.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const xpos = Blockly.JavaScript.valueToCode(block, "X", Blockly.JavaScript.ORDER_ATOMIC);
    const ypos = Blockly.JavaScript.valueToCode(block, "Y", Blockly.JavaScript.ORDER_ATOMIC);
    const wide = Blockly.JavaScript.valueToCode(block, "Width", Blockly.JavaScript.ORDER_ATOMIC);
    const high = Blockly.JavaScript.valueToCode(block, "Height", Blockly.JavaScript.ORDER_ATOMIC);
    return `await image.crop( Number(` + xpos + `), Number(` + ypos + `), Number(` + wide + `), Number(` + high + `))\n`;
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