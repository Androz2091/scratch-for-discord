import Blockly from "blockly/core";

const blockName = "inv_fsh_api_craiyon";

const blockData = {
  "message0": "generate craiyon image with prompt %1",
  "args0": [
    {
      "type": "field_input",
      "name": "type",
      "text": "fsh"
    }
  ],
  "output": "String",
  "colour": '#50494e',
  "tooltip": "Generates ai image (link) using fsh api (may take up to 2 minutes)",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var text_type = block.getFieldValue('TYPE');
  text_type = encodeURIComponent(text_type.toLowerCase());
  
  var code = `await _S4D_inventionFSHapiCraiyon('${text_type}')`;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};
