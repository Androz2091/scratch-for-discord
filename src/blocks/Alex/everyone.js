import Blockly from "blockly/core";

const blockName = "everyn";

const blockData = {
    "message0": "Everyone",
    "args0": [
    ],
    "output": "Everyone",
    "colour": "#5153c2",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return ['(s4dmessage.guild || {}).id', Blockly.JavaScript.ORDER_NONE ];
};
