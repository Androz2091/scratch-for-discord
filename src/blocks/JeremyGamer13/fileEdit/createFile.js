import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";


const blockName = "jg_file_create";

const blockData = {
  "message0": "Create or edit file %1 using content %2 and %3",
  "args0": [
    {
      "type": "input_value",
      "name": "fileName",
      "check": ["Number", "String", "var", "Env"]
    },
    {
      "type": "input_value",
      "name": "fileContent",
      "check": ["Number", "String", "var", "Env"]
    },
    {
      "type": "field_dropdown",
      "name": "truefalse",
      "options": [
        [
          "overwrite",
          'true'
        ],
        [
          "dont overwrite",
          'false'
        ]
      ],
    },
  ],
  "colour": 45,
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "The file name and content for a file. Be careful with this though, this saves as an actual file on your bot!",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const fileName = Blockly.JavaScript.valueToCode(block, "fileName", Blockly.JavaScript.ORDER_ATOMIC);
  const fileContent = Blockly.JavaScript.valueToCode(block, "fileContent", Blockly.JavaScript.ORDER_ATOMIC);
  const tralse = block.getFieldValue("truefalse");
  return `S4D_APP_write.sync(String(` + fileName + `), String(` + fileContent + `), { overwrite: ` + tralse + ` });`;
}

registerRestrictions(blockName, [
  {
    type: "notempty",
    message: "RES_MISSING_CONTENT_GEN",
    types: [
      "fileContent",
      "fileName"
    ]
  }
]);