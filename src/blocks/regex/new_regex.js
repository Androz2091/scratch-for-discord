import Blockly from "blockly/core";

const blockName = "new_regex";

const blockData = {
    "message0": "new regex %1",
    "args0": [
        {
            "type": "input_value",
            "name": "REGEX",
            "check": ["Number", "String"]
        },

    ],
    "output": "regex",
    "colour": "#5ba58b",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const regex = Blockly.JavaScript.valueToCode(block, "REGEX", Blockly.JavaScript.ORDER_ATOMIC);
    let code = [`new Regex(${regex})`, Blockly.JavaScript.ORDER_NONE];
    return code
};
