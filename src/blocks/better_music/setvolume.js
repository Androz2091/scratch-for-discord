import Blockly from "blockly/core";

const blockName = "better_volume";

const blockData = {
    "message0": "Set volume to %1",
    "args0": [
        {
            "type": "input_value",
            "name": "VOLUME",
            "check": ["Number","String"]
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4C97FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const vol = Blockly.JavaScript.valueToCode(block, "VOLUME", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `guildQueue.setVolume(Number(${vol}))`;
    return code;
};