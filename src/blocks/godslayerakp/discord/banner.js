import Blockly from "blockly/core";

const blockName = "gsa_get_user_banner_but_member_is_user_rn";
const blockData = {
  "message0": "get banner on member %1",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "Member"
    }
  ],
  "output": "String",
  "inputsInline": true,
  "colour": '#50A6C9',
  "tooltip": "returns the url of any users banner image",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
  const user = Blockly.JavaScript.valueToCode(block, "user", Blockly.JavaScript.ORDER_ATOMIC)
  return [`
${user}.bannerUrl({
  format: "png"
})\n`, Blockly.JavaScript.ORDER_ATOMIC];
}
