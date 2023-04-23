import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_pixelate";

const blockData = {
    "message0": "Pixelate Image:%1 Amount: %2 X: %3 Y: %4 Width %5 Height %6",
    "args0": [
        {
            "type": "input_dummy"
            // only exists to push the other part of the block down, xD
        },
        {
            "type": "input_value",
            "name": "Size",
            "check": ["Number", "var", "Env"]
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
    const size = Blockly.JavaScript.valueToCode(block, "Size", Blockly.JavaScript.ORDER_ATOMIC);
    const xpos = Blockly.JavaScript.valueToCode(block, "X", Blockly.JavaScript.ORDER_ATOMIC);
    const ypos = Blockly.JavaScript.valueToCode(block, "Y", Blockly.JavaScript.ORDER_ATOMIC);
    const wide = Blockly.JavaScript.valueToCode(block, "Width", Blockly.JavaScript.ORDER_ATOMIC);
    const high = Blockly.JavaScript.valueToCode(block, "Height", Blockly.JavaScript.ORDER_ATOMIC);
    return `await image.pixelate( Number(` + size + `), Number(` + xpos + `), Number(` + ypos + `), Number(` + wide + `), Number(` + high + `))
`;
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