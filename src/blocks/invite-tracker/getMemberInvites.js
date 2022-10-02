import Blockly from "blockly/core";

const blockName = "get_member_invites";

const blockData = {
    "message0": "get member invites %1",
    "args0": [
        {
          "type": "input_value",
          "name": "USER",
          "check": "Member" 
        }
    ],
    "colour": "#187795",
    "output": "Number",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const user = Blockly.JavaScript.valueToCode(block, "USER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`await s4d.Inviter.getInvites(${user})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
