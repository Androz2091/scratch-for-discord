import * as Blockly from "blockly/core";

const blockName = "monaco_expanded_punishments";


const blockData = {
    "message0": "%1 member %2 from server %3 with reason %4",
    "inputsInline": true,
    "args0": [
      {
      "type": "field_dropdown",
      "name": "punishments",
      "options": [
        [
          "kick",
          "kick"
        ],
        [
          "ban",
          "ban"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "member",
      "check": "Member"
    },
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    },
    {
      "type": "input_value",
      "name": "reason",
      "check": "String"
    }
    ],
    "colour": "#0c97f0",
"previousStatement": null,
"nextStatement": null,
    "tooltip": "Expanded punishment block. Kick/ban a member from any server. ",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['monaco_expanded_punishments'] = function(block) {
  var dropdown_punishments = block.getFieldValue('punishments');
  var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
  var value_server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
  var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_server}.members.${dropdown_punishments}(${value_member}, { reason: String(${value_reason}) })\n`;
  return code;
};
