import * as Blockly from "blockly/core";

const blockName = "monaco_delete_guild";


const blockData = {
    "message0": "Delete server %1",
    "inputsInline": true,
    "args0": [
      {
      "type": "input_value",
      "name": "Server",
      "check": "Server"
    }
  ],
    "colour": "#0c97f0",
"previousStatement": null,
"nextStatement": null,
    "tooltip": "Deletes a server. Only works if the owner is the bot itself.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['monaco_delete_guild'] = function(block) {
  var value_server = Blockly.JavaScript.valueToCode(block, 'Server', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.delete()\n`;
  return code;
};
