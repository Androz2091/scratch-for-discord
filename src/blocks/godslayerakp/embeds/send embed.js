/* eslint-disable */
import Blockly from "blockly/core";
const blockName = "gsa_send_embed";
const blockData = {
  "type": "gsa_send_embed",
  "message0": "send embed %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME"
    }
  ],
  "output": ['embed', "MessageEmbed", "Embed", "EMBED"],
  "inputsInline": true,
  "colour": 120,
  "tooltip": "can be used to send the embed with the name",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  // const color = Blockly.JavaScript.valueToCode(block, "title", Blockly.JavaScript.ORDER_ATOMIC)
  const color = block.getFieldValue("NAME")
  return [`embeds: [${color.replaceAll(" ", "_").replace(/[!@#\$%\^&\*\(\)-=\]\[\|{}\+`~'":;\?\/\.<>,\/]/g, '_')}]`, Blockly.JavaScript.ORDER_NONE];
}
