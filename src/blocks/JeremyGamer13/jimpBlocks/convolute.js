import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_convolute";

const blockData = {
    "message0": "Convolute image using kernel %1",
    "args0": [
        {
            "type": "input_value",
            "name": "val",
            "check": ["String", "var", "Env"]
        }
    ],
    "colour": 260,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Uses the specified convolution kernel on the image. I'm gonna be honest and say that not even I know how to use this. Can only use Text, Variables, or Env secrets.",
    "helpUrl": "https://en.wikipedia.org/wiki/Kernel_(image_processing)"
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const val = Blockly.JavaScript.valueToCode(block, "val", Blockly.JavaScript.ORDER_ATOMIC);
    return `await image.convolute( eval('[' + ${val} + ']'))
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