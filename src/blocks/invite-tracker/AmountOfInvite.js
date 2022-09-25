import Blockly from "blockly/core";

const blockName = "Amount";

const blockData = {
    "message0": "Amount of Invite of Inviter",
    "colour": "#187795",
    "output": "Number",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["uses", Blockly.JavaScript.ORDER_NONE];
    return code;
};
