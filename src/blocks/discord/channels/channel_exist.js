import Blockly from "blockly/core";

const blockName = "s4d_channel_exist";

const blockData = {
    "message0": "channel %1 exist?",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check":  "Channel" 
        },
    ],
    "output": "Boolean",
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
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`typeof ${channel} !== undefined`, Blockly.JavaScript.ORDER_NONE ];
    return code;
    
};
