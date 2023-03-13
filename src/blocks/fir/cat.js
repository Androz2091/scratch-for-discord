import Blockly from "blockly/core";

const blockName = "fir_api_catfact";

const blockData = {
  "message0": "get a random cat fact",
  "args0": [],
  "output": "String",
  "colour": '#D14081',
  "tooltip": "Gets a random fact about cats",
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

  var code = `await _S4D_firAPIcatfacts()`;

  return [code, Blockly.JavaScript.ORDER_NONE];
