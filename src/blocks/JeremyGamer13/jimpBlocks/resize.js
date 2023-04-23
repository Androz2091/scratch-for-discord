import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_resize";

const blockData = {
    "message0": "Resize Image:%1 Width %2 Height %3",
    "args0": [
        {
            "type": "input_dummy"
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
    "tooltip": "Resize the image to a specific Width and Height. Can only use Numbers, Variables, or Env secrets.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const wide = Blockly.JavaScript.valueToCode(block, "Width", Blockly.JavaScript.ORDER_ATOMIC);
    const high = Blockly.JavaScript.valueToCode(block, "Height", Blockly.JavaScript.ORDER_ATOMIC);
    return `await image.resize( Number(` + wide + `), Number(` + high + `))\n`;
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