import * as Blockly from "blockly/core";
import { javascriptGenerator, Order } from "blockly/javascript";

const blockName = "s4d_every_seconds";

const blockData = {
    "message0": "%{BKY_EVERY_SECONDS} %2 %3",
    "args0": [
        {
            "type": "input_value",
            "name": "TIME",
            "check": "Number"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "colour": "#5BA55B",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "%{BKY_EVERY_SECONDS_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(block) {
    const time = javascriptGenerator.valueToCode(block, "TIME", Order.ATOMIC);
    const statements = javascriptGenerator.statementToCode(block, "STATEMENTS");
    // At least one second, so a 0 or a typo can't spin the bot
    return `setInterval(async () => {\n${statements}}, Math.max(Number(${time}) || 0, 1) * 1000);\n`;
};
