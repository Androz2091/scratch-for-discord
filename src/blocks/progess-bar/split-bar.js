import Blockly from "blockly/core";

const blockName = "split_bar";

const blockData = {
    "message0": "Create Split Progess Bar Total %1 Current %2 Size %3 Line %4 Slider %5",
    "args0": [
        {
            "type": "input_value",
            "name": "TOTAL",
            "check": [ "String","Number" ]
        },
        {
            "type": "input_value",
            "name": "CURRENT",
            "check": [ "String","Number" ]
        },
        {
            "type": "input_value",
            "name": "SIZE",
            "check": [ "String","Number" ]
        },
        {
            "type": "input_value",
            "name": "LINE",
            "check": [ "String","Number" ]
        },
        {
            "type": "input_value",
            "name": "SLIDER",
            "check": [ "String","Number" ]
        }
    ],
    "colour": "#5BA55B",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const total = Blockly.JavaScript.valueToCode(block, "TOTAL", Blockly.JavaScript.ORDER_ATOMIC);
    const current = Blockly.JavaScript.valueToCode(block, "CURRENT", Blockly.JavaScript.ORDER_ATOMIC);
    const size = Blockly.JavaScript.valueToCode(block, "SIZE", Blockly.JavaScript.ORDER_ATOMIC) || null;
    const line = Blockly.JavaScript.valueToCode(block, "LINE", Blockly.JavaScript.ORDER_ATOMIC) || null;
    const slider = Blockly.JavaScript.valueToCode(block, "SLIDER", Blockly.JavaScript.ORDER_ATOMIC) || null;
    return [`progressbar.splitBar(${total}, ${current}, ${size},${line},${slider});`, Blockly.JavaScript.ORDER_ATOMIC ];
};