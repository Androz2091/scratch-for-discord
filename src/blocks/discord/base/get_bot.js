import * as Blockly from "blockly/core";

const blockName = "s4d_get_bot";

const blockData = {
    "message0": "%{BKY_GET_BOT}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        }
    ],
    "colour": "#5b67a5",
    "output": "Member",
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
    return [ `${server}.members.cache.find((m) => m.id === s4d.client.user.id)`, Blockly.JavaScript.ORDER_NONE ];
};