import Blockly from "blockly/core";

const blockName = "s4d_forever3";

const blockData = {
    "message0": "repeat forever with delay %4 %1 do %2 send to console? %3",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENT"
        },
        {
            "type": "input_value",
            "name": "LOG",
            "check": "Boolean"
        },
        {
            "type": "input_value",
            "name": "DELAY",
            "check": "Number"
        }
    ],
    "colour": "#5BA55B",
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

Blockly.JavaScript[blockName] = function(block) {
    const log = Blockly.JavaScript.valueToCode(block, "LOG", Blockly.JavaScript.ORDER_ATOMIC);
    const delay = Blockly.JavaScript.valueToCode(block, "DELAY", Blockly.JavaScript.ORDER_ATOMIC);
    return `
        while(s4d.client && s4d.client.token) {
            await delay(${delay});
            ${Blockly.JavaScript.statementToCode(block, 'STATEMENT')}
            if (${log}) {
                console.log('ran')
            }
        }
    `;
};
