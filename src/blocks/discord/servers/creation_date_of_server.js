import * as Blockly from "blockly/core";

const blockName = "s4d_server_created_at";

const blockData = {
    "message0": "%{BKY_SERVER_CREATED_AT}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        },
    ],
    "colour": "#e07e6c",
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
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    return [ `moment(${server}.createdAt).format('LLLL')`, Blockly.JavaScript.ORDER_NONE ];
};