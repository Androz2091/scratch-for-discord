import * as Blockly from "blockly/core";

const blockName = "h_args";

const blockData = {
    "message0": "get arguments %1",
    "args0": [
        {
        "type": "input_value",
        "name": "ARGS",
        "check": ["Number", "String"]
        }
    ],
    "colour": "#5ba58b",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    let args = Blockly.JavaScript.valueToCode(block, "ARGS", Blockly.JavaScript.ORDER_ATOMIC) || null
    if(typeof args === 'string') {
        return `args.join(${args})`
    } else if(typeof args === 'number') {
        return`args[${args}]`
    } else if(args === null) {
        return `args.join(' ')`
    }
};

