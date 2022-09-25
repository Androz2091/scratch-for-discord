import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_kernels";

const blockData = {
    "message0": "Use %1 kernel",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "effect",
            "options": [
                [
                    "emboss",
                    `[-2,-1, 0],
    [-1, 1, 1],
    [ 0, 1, 2]`
                ],
                [
                    "sharpen",
                    `[0,-1, 0],
    [-1, 5, -1],
    [ 0, -1, 0]`
                ]
            ],
        }
    ],
    "colour": 260,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Applies kernels to achieve certain effects on the image.",
    "helpUrl": "https://en.wikipedia.org/wiki/Kernel_(image_processing)"
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const effect = block.getFieldValue("effect");
    return `await image.convolute([
${effect}
])
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