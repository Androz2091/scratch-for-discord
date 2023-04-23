import * as Blockly from "blockly/core";

const blockName = "s4d_channel_ahq_name";

const blockData = {
    "message0": "Name of channel %1",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Channel"
        }
    ],
    "colour": "#4C97FF",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    return [ `${server}.name`, Blockly.JavaScript.ORDER_NONE ];
};
