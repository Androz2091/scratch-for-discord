import Blockly from "blockly/core";

const blockName = "remove_reaction_of_user";

const blockData = {
"message0": "In message %1 remove reaction with name %2 of user %3",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "Message"
    },
    {
      "type": "input_value",
      "name": "reaction",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "user",
      "check": "Member"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#4C97FF",
  "tooltip": "",
  "helpUrl": ""
}
  Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {

const message = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);
const user = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC);
  const reaction = Blockly.JavaScript.valueToCode(block, "reaction", Blockly.JavaScript.ORDER_ATOMIC);
  
const code =  `${message}.reactions.cache.find(reaction => reaction.emoji.name == ${reaction}).users.remove(${user}.id); \n`;
  return code;
};
