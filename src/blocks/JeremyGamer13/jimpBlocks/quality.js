import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_jpgqual";

const blockData = {
    "message0": "Set JPG Quality to %1",
    "args0": [
        {
            "type": "input_value",
            "name": "quality",
            "check": ["Number", "var", "Env"]
        }
    ],
    "colour": 260,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set the quality for JPG files. Can only use Numbers, Variables, or Env secrets.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const quality = Blockly.JavaScript.valueToCode(block, "quality", Blockly.JavaScript.ORDER_ATOMIC);
    return `await image.quality(Number(` + quality + `))\n`;
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