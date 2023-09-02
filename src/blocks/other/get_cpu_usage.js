import * as Blockly from "blockly/core";

const blockName = "s4d_cpu_get_usage";

const blockData = {
    "message0": "%{BKY_GET_CPU_USAGE} %2 %1",
    "args0": [
        {
            "type": "input_statement",
            "name": "CODE"
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": "#D14081",
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const code = Blockly.JavaScript.statementToCode(block, "CODE");
    return(`pidusage(process.pid, async function(s4dErr, s4dStatsCpu) {\n${code}\n});`)
}
