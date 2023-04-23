import * as Blockly from "blockly/core";

const blockName = "s4d_message_content";

const blockData = {
    "message0": "%{BKY_MESSAGE_CONTENT}",
    "colour": "#5BA58C",
    "tooltip": "",
    "output": "String",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    const code = ["s4dmessage.content", Blockly.JavaScript.ORDER_NONE];
    return code;
};
