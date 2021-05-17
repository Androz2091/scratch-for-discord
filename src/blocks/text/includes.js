import Blocklylua from "blockly/lua";
import Blockly from "blockly/core"
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_includes";

const blockData = {
    "message0": "%{BKY_INCLUDES}",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "INCLUDES",
            "check":  "String" 
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
    const text = Blocklylua.valueToCode(block, "TEXT", Blocklylua.ORDER_ATOMIC);
    const includes = Blocklylua.valueToCode(block, "INCLUDES", Blocklylua.ORDER_ATOMIC);
    const code = [`string.find(${text},${includes})`, Blocklylua.ORDER_NONE];
    
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_INCLUDES_TEXT",
        types: [
            "TEXT"
        ]
    },
    {
        type: "notempty",
        message: "RES_INCLUDES_INCLUDES",
        types: [
            "INCLUDES"
        ]
    }
]);