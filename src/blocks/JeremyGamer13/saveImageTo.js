import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "jg_saveJimpageAs";

const blockData = {
    "message0": "Save Image as %1",
    "args0": [
      {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "Number", "String", "var", "Env"]
        }
    ],
    "colour": 260,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "The file name of the Jimp image output. Be careful with this though, this saves as an actual file on your bot!",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const fileName = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    return `await image.writeAsync(` + fileName + `);`;
}

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT_GEN",
        types: [
          "CONTENT"
        ]
    },
    {
        type: "hasparent",
        message: "RES_JGSAVEIMAGE",
        types: [
            "jg_beginJimp"
        ]
    }
]);