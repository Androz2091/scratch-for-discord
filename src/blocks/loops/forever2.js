import Blockly from "blockly/core";

const blockName = "s4d_forever2";

const blockData = {
    "message0": "repeat forever %1 do %2 send to console? %3",
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
        }
    ],
    "colour": "#5BA55B",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const log = Blockly.JavaScript.valueToCode(block, "LOG", Blockly.JavaScript.ORDER_ATOMIC);
    return `
        while(s4d.client && s4d.client.token) {
            await delay(50);
            ${Blockly.JavaScript.statementToCode(block, 'STATEMENT')}
            if (${log}) {
                console.log('ran')
            }
        }
    `;
};

Blockly.Blocks["s4d_forever_nolog"] = {
    init: function () {
        this.jsonInit({
            "message0": "repeat forever %1 do %2 without logging",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "STATEMENT"
                }
            ],
            "colour": "#5BA55B",
            "previousStatement": null,
            "nextStatement": null,
            "tooltip": "",
            "helpUrl": ""
        });
    }
};

Blockly.JavaScript["s4d_forever_nolog"] = function (block) {
    return `
        while(s4d.client && s4d.client.token) {
            await delay(50);
            ${Blockly.JavaScript.statementToCode(block, 'STATEMENT')}
        }
    `;
};
