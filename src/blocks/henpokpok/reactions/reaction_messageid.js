import * as Blockly from "blockly";


const blockName = "react_messageId";

const blockData = {
    "message0": "Reacting Message id",
    "colour": "#BC5CF0",
    "output": "String"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["reaction.message.id", Blockly.JavaScript.ORDER_NONE];
    return code;
};

