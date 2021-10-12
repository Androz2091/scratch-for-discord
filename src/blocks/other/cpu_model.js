import Blockly from "blockly/core";

const blockName = "s4d_cpu_model";

const blockData = {
    "message0": "%{BKY_CPU_MODEL}",
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
    const code = ["os.cpus()[0].model", Blockly.JavaScript.ORDER_NONE];
    return code;
};
