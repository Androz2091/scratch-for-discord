import Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "jg_jimp_brightnesscontrast";

const blockData = {
    "message0": "Change %1 effect on image by %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "type",
            "options": [
              [
                "brightness",
                '"brightness"'
              ],
              [
                "contrast",
                '"contrast"'
              ],
              [
                "color",
                '"color"'
              ]
            ]
        },
        {
            "type": "input_value",
            "name": "amount",
            "check": [ "Number", "var", "Env"]
        }
    ],
    "colour": 260,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Changes the brightness or contrast on the image by -100 to 100. Color effects change the color by -360 to 360.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const type = block.getFieldValue("type");
  const amount = Blockly.JavaScript.valueToCode(block, "amount", Blockly.JavaScript.ORDER_ATOMIC);
  if ((String(type) === '"brightness"')) {
    return `await image.brightness( (` + amount + ` / 100) )\n`;
  } else if ((String(type) === '"contrast"')) {
    return `await image.contrast((` + amount + ` / 100))\n`;
  } else {
    return `await image.color([
  { apply: 'hue', params: [` + amount + `] }
]);\n`;
  }
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