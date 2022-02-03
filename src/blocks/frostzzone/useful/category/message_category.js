import Blockly from "blockly/core";

const blockName = "frost_message_category";

const blockData = {
    "message0": "Message Channel Category",
    "args0": [
    ],
    "output": "Category",
    "colour": "#D14081",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return [`s4dmessage.channel.parent`, Blockly.JavaScript.ORDER_NONE ];
};
