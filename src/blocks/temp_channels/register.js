import Blockly from "blockly/core";

const blockName = "s4d_temp_register";

const name = "Register a voice channel with the id %1 %2 Delete if empty %3 %4 Max member count %5 %6 Temp channel name %7";

const blockData = {
  "type": "block_type",
  "message0": `${name}`,
  "args0": [
    {
      "type": "input_value",
      "name": "CHANNELID",
      "Check": "String"
    },
    {
      "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "EMPTY",
        "check": "Boolean"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "MAX",
        "check": "Number"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null, 
  "colour": "#48a4f0",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const channel_id = Blockly.JavaScript.valueToCode(block, "CHANNELID", Blockly.JavaScript.ORDER_ATOMIC);
const empty = Blockly.JavaScript.valueToCode(block, "EMPTY", Blockly.JavaScript.ORDER_ATOMIC);
const max = Blockly.JavaScript.valueToCode(block, "MAX", Blockly.JavaScript.ORDER_ATOMIC);
const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    const stuffkksadicnsake = {
      childAutoDeleteIfEmpty: ${empty},
      childMaxUsers: ${max},
      childBitrate: 64000,
      childFormat: (s4dmember, count) => ${name}
    }
    tempChannels.registerChannel(${channel_id}, stuffkksadicnsake);
    db.push("temp-channels", {
      channelID: message.member.voice.channel.id,
      options: stuffkksadicnsake
    });
    `;
    return code;
};