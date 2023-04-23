import Blockly from "blockly/core";

const blockName = "blank_code_output";

const blockData = {
    "message0": "insert code⠀ %1 ⠀",
    "args0": [{
        "type": "field_multilinetext",
        "name": "TEXT",
        "text": "code",
      "spellcheck": false
    }],
    "colour": "#d14081",
    "output": null,
    "tooltip": "Insert code to run without eval"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    var text = block.getFieldValue('TEXT');
  if ((text == null)||(text == undefined)) return ``
    var code = `${text}\n`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
