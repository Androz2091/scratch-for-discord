import * as Blockly from "blockly/core";

const blockName = "mainchannel";

const blockData = {
    "message0": "Get main channel of server %1",
    "args0": [
        {
            "type": "input_value",
            "name": "GUILD",
            "check": "Server"
        }
    ],
    "colour": "#a55b80",
    "output": "Channel",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const sv = Blockly.JavaScript.valueToCode(block, "GUILD", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`mainchannel(${sv})`, Blockly.JavaScript.ORDER_ATOMIC ];
    return code;
};
