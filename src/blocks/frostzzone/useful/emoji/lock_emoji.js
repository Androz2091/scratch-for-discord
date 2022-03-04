import * as Blockly from "blockly/core";

const blockName = "fz_lock_emoji";

const blockData = {
    "message0": "Lock/add role with id %2 to emoji %1",
    "args0": [
        {
            "type": "input_value",
            "name": "EMOJI",
            "check": [ "Emoji" ]
        },
      {
        "type":"input_value",
        "name":"ROLE",
        "check":"Role"
      }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const emoji = Blockly.JavaScript.valueToCode(block, "EMOJI", Blockly.JavaScript.ORDER_ATOMIC);
  const role = Blockly.JavaScript.valueToCode(block, "ROLE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${emoji}.roles.add([${role}]);\n`;
    return code;
};