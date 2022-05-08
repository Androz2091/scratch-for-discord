import Blockly from "blockly/core";

const blockName = "s4d_insert_code";

const blockData = {
    "message0": "insert javascript code %1",
    "args0": [{
        "type": "field_multilinetext",
        "name": "TEXT",
        "spellcheck": false
    }],
    "colour": "#d14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Insert some JavaScript code."
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
    return code;
};
