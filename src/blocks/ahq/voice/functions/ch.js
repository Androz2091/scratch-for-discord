import * as Blockly from "blockly";

const blockName = "act_voice";
//block working now working
const blockData = {
    "message0": "%1 member %2 %3 to channel/mute status %4",
    "args0": [
    {
        "type": "field_dropdown",
        "name": "action",
        "options": [
            [
                "Move",
                "setChannel"
            ],
            [
                "Deafen",
                "setDeaf"
            ],
            [
                "Mute",
                "setMute"
            ]
        ]
    },
    {
        "type": "field_dropdown",
        "name": "test",
        "options": [
            [
                "Voice Member",
                "newState"
            ]
        ]
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "r",
        "check": ["VoiceChannel", "Boolean"]
    }],
    "colour": '#40BF4A',
    "tooltip": "Only Works with channel join & channel switch",
    "helpUrl": "",
    "previousStatement": null,
    "nextStatement": null
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block){
    const code = `newState.${block.getFieldValue("action")}(${Blockly.JavaScript.valueToCode(block, "r", Blockly.JavaScript.ORDER_ATOMIC || null)})`;
    return code;
};