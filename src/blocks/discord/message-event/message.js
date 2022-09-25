import Blockly from "blockly/core";

const blockName = "Message";

const blockData = {
    "message0": "message",
    "colour": "#a55b80",
    "output": "Message",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = ["s4dmessage", Blockly.JavaScript.ORDER_NONE];
    return code;
};
