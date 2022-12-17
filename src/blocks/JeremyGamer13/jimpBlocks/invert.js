import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_invert";

const blockData = {
    "message0": "Invert Effect",
    "args0": [],
    "colour": 260,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Inverts the colors on the image.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    return `await image.invert()\n`;
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