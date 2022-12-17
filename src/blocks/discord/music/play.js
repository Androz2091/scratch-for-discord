import Blockly from "blockly/core";

const blockName = "s4d_play";

const blockData = {
    "message0": "%{BKY_PLAY}",
    "args0": [
        {
            "type": "input_value",
            "name": "SEARCH",
            "check": "MusicSearch"
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
    const search = Blockly.JavaScript.valueToCode(block, "SEARCH", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `queue.play(${search});\n`;
    return code;
};
