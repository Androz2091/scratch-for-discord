import * as Blockly from "blockly/core";


const blockName = "slash_ticket_setup";

const blockData = {
    "message0": "[Slash] Set ticket channel to %1",
    "args0": [
      {
            "type": "input_value",
            "name": "channel",
            "check": "Channel"
        }
    ],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  const channel = Blockly.JavaScript.valueToCode("channel", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `ticket.setup(interaction, interaction.options.getChannel(${channel}).id);`;
    return code;
};
