import Blockly from "blockly/core";

const blockName = "unix_to_date";

const blockData = {
    "message0": "unix %1 to date",
    "args0": [
        {
            "type": "input_value",
            "name": "UNIX",
            "check": "Number"
        },
    ],
    "output": "Number",
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
    const unix = Blockly.JavaScript.valueToCode(block, "UNIX", Blockly.JavaScript.ORDER_ATOMIC);
    let code = [`new Date(${unix} * 1000)`, Blockly.JavaScript.ORDER_NONE];
    return code
};
