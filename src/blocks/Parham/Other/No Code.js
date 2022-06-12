import * as Blockly from "blockly";

const blockName = "parham_other_nocode";

const blockData = {
  "message0": "No Code %1 : %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#D14081",
  "tooltip": "The Blocks You Put On This Block Will Not Exported In Code",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};