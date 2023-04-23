import Blockly from "blockly/core";

const blockName = "get_sticker";

const blockData = {
    "message0": "Get sticker on server %1 with name equal to %2",
  "args0": [
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    }, {
"type": "input_value",
      "name": "sticker",
      "check": "String"
    }
  ],
    "output": "Sticker",
    "colour": "#02a836",
    "tooltip": "Obtains a sticker from the server.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const guild = Blockly.JavaScript.valueToCode(block, "server", Blockly.JavaScript.ORDER_ATOMIC);
  const sticker = Blockly.JavaScript.valueToCode(block, "sticker", Blockly.JavaScript.ORDER_ATOMIC);
  const code =  [`${guild}.stickers.cache.find(s => s.name == ${sticker}) \n`, Blockly.JavaScript.ORDER_NONE ];
  return code;
};
