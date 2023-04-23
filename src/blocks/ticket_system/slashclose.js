import * as Blockly from "blockly/core";


const blockName = "slash_close_ticket";

const blockData = {
  "message0": "[Slash] Close the ticket (message channel)",
  "args0": [],
  "colour": "#D14081",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function () {
  const code = `ticket.close(interaction.channel);`;
  return code;
};
