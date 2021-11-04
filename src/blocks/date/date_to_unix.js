import Blockly from "blockly/core";

const blockName = "date_to_unix";

const blockData = {
    "message0": "date %1 to unix",
    "args0": [
        {
            "type": "input_value",
            "name": "DATE",
            "check":  "Number" 
        },
       
    ],
    "output": "Number",
    "colour": "#5ba58b",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const date = Blockly.JavaScript.valueToCode(block, "DATE", Blockly.JavaScript.ORDER_ATOMIC);
    let code = `Math.floor(${date}.getTime()/1000);`
    return code
};
