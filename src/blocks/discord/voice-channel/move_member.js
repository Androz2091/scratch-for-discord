import Blockly from "blockly/core";

const blockName = "move_member";

const blockData = {
    "message0": "mute member with id %1 voice channel %2",
    "args0": [
        {
            "type": "input_value",
            "name": "id",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "vc",
            "check": "Channel"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "Tooltip": "for voice channel you use get Channel + voice channel id",
    "helpUrl": ""
}; 

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
        this.Tooltip = "for voice channel you use get Channel + voice channel id"
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const id = Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_ATOMIC);
    const vc = Blockly.JavaScript.valueToCode(block, "vc", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
s4dmessage.channel.members.forEach(member => {if(member.id === ${id}){member.voice.setChannel(${vc})}});`
    return code;
};