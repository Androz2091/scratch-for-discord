import Blocklylua from "blockly/lua";
import Blockly from "blockly/core"

const blockName = "s4d_starts_with";

const blockData = {
    "message0": "%{BKY_STARTS_WITH}",
    "args0": [
        {
            "type": "input_value",
            "name": "STRING",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "SUBSTRING",
            "check": [ "String" ]
        }
    ],
    "output": "Boolean",
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
    const string = Blocklylua.valueToCode(block, "STRING", Blocklylua.ORDER_ATOMIC);
    const substring = Blocklylua.valueToCode(block, "SUBSTRING", Blocklylua.ORDER_ATOMIC);
    const code = [ `string.startswith(${string},${substring})`, Blocklylua.ORDER_NONE ];
    return code;
};
