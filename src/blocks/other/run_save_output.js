import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_run_save_output";

const blockData = {
    "message0": "%{BKY_RUN_SAVE_OUTPUT}",
    "args0": [
        {
            "type": "input_statement",
            "name": "STATEMENT",
            "check": "RunnableActionWithResult"
        },
        {
            "type": "field_variable",
            "name": "VAR",
            "variable": null
        }
    ],
    "colour": "#D14081",
    "tooltip": "%{BKY_RUN_SAVE_OUTPUT_TOOLTIP}",
    "helpUrl": "",
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block){
    const statement = javascriptGenerator.statementToCode(block, 'STATEMENT').trim();
    if (!statement) return "";
    const variable = javascriptGenerator.getVariableName(block.getFieldValue('VAR'));
    // One-line actions give their result (the sent message, the created channel…), in parentheses since
    // they can be assignments themselves; longer code only runs
    const code = statement.includes("\n")
        ? `${variable} = await (async () => {\n${statement}\n})();\n`
        : `${variable} = await (${statement.replace(/;$/, "")});\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "custom",
        message: "The 'run' block must encapsulate exactly one statement",
        code: "if (block.getFirstStatementConnection().isConnected()) _return = !block.getFirstStatementConnection().targetBlock().getNextBlock(); else _return = false;"
    }
]);
