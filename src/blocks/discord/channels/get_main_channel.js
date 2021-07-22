import * as Blockly from "blockly/core";

const blockName = "s4d_get_main_channel";

const blockData = {
    "message0": "%{BKY_GET_MAIN_CHANNEL}",
    "args0": [
        {
            "type": "input_value",
            "name": "GUILD",
            "check": "Server"
        }
    ],
    "colour": "#a55b80",
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
    const sv = Blockly.JavaScript.valueToCode(block, "GUILD", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`mainchannel(${sv})`, Blockly.JavaScript.ORDER_ATOMIC ];
    return code;
};

