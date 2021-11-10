import Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_cpu_usage";

const blockData = {
    "message0": "%{BKY_CPU_USAGE}",
    "colour": "#D14081",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["(s4dStatsCpu.cpu / 10).toFixed(1)", Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_IN_GET_USAGE",
        types: [
            "s4d_cpu_get_usage"
        ]
    }
]);

