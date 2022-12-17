//"output": "Boolean",
import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_tpixels";

const blockData = {
    "message0": "Image has alpha pixels?",
    "args0": [],
    "colour": 260,
    "output": "Boolean",
    "tooltip": "Returns true if the image has pixels that are see through.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`image.hasAlpha() === true`, Blockly.JavaScript.ORDER_NONE ];
    return code;
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