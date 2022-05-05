import * as Blockly from "blockly/core";

const blockName = "fz_color";
const defaultColor = "#a5745b";
const blockData = {
    "message0": "colour %1",
  "args0": [
    {
      "type": "field_input",
      "name": "COLOR",
      "text": ""
    }
  ],
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
      var thisBlock = this
        thisBlock.setColour(defaultColor);
      this.setOutput(true, "JGUYGKHJFAJSFHDGM");
    },
  onchange: function() {
  try {
    if (!(this.getFieldValue('COLOR')).length) {
      this.setColour(defaultColor);
    this.setOutput(true, "JGUYGKHJFAJSFHDGM");
    } else {
    this.setColour(this.getFieldValue('COLOR'));
    this.setOutput(true, "Colour");
    }
  } catch {
    this.setColour(defaultColor);
    this.setOutput(true, "JGUYGKHJFAJSFHDGM");
  }
  }
};

Blockly.JavaScript[blockName] = function(block) {
  const color = block.getFieldValue("COLOR");
    const code = `${color}`;
    return code;
};