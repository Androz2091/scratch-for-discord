import Blockly from "blockly/core";

const blockName = "send_sticker";

const blockData = {
  "message0": "In channel %1 %2 send sticker %3",
  "args0": [
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "sticker",
      "check": "Sticker"
    },
  ],
  "previousStatement": null,
  "nextStatement": null, 
  "colour": "#02a836",
  "tooltip": "Sends a sticker to a specific channel.",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const channel = Blockly.JavaScript.valueToCode(block, "channel", Blockly.JavaScript.ORDER_ATOMIC);
const sticker = Blockly.JavaScript.valueToCode(block, "sticker", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.send({stickers: [${sticker}]})
    `;
    return code;
};
