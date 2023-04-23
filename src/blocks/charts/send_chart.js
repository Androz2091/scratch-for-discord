import Blockly from "blockly/core";

const blockName = "send_chart";

// Block URL = https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bg6rpk

const blockData = {
  "type": "send_chart",
  "message0": "Send chart",
  "output": null,
  "colour": 75,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript['send_chart'] = function() {
  // TODO: Assemble JavaScript into code variable.
  var code = `{files: [{attachment: chart.toURL(), name: 'chart.png'}],}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};