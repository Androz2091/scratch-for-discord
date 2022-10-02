import Blockly from "blockly/core";

const blockName = "jg_tests_deleteInput";

const blockData = {
    "message0": "Remove Input %1",
    "args0": [
        {
            "type": "input_value", 
            "name": "A",
            "check": null
        }
    ],
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const A = Blockly.JavaScript.valueToCode(block, "A", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${A}`;
    return code;
};