import Blockly from "blockly/core";

const blockName = "s4d_cpu_usage";

const blockData = {
    "message0": "%{BKY_CPU_USAGE}",
    "colour": "#D14081",
    "output": "Number",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["(process.cpuUsage().user - process.cpuUsage().system) / 10000", Blockly.JavaScript.ORDER_NONE];
    return code;
};
