import Blockly from "blockly/core";

const blockName = "jg_rbs_isRunButton";

const blockData = {
    "message0": "bot is on run button?",
    "args0": [],
    "colour": "#4C97FF",
    "output": "Boolean",
    "tooltip": "Returns true if the bot is being ran on the Run Button.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = [`S4D_APP_RUN_BUTTON`, Blockly.JavaScript.ORDER_NONE ];
    return code;
}