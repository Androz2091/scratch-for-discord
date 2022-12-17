import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_grayscale";

const blockData = {
    "message0": "Grayscale Effect",
    "args0": [],
    "colour": 260,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Adds a grayscale effect to the image.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    return `await image.greyscale()\n`;
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