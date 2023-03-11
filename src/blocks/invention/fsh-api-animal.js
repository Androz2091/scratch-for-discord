import Blockly from "blockly/core";

const blockName = "inv_fsh_api_animal";

const blockData = {
  "message0": "get %1 image from fsh api",
  "args0": [
    {
      "type": "field_input",
      "name": "TYPE",
      "text": "cat"
    }
  ],
  "output": "String",
  "colour": '#50494e',
  "tooltip": "Get's random animal picture (link) from fsh api",
  "helpUrl": "https://fsh-bot.frostzzone.repl.co/api/animal"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var text_type = block.getFieldValue('TYPE');
  text_type = encodeURIComponent(text_type.toLowerCase());

  var code = `await inventionVeryLongFunctionSoThenAUserDoesntAcidentallyUseThisName('${text_type}')`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};
