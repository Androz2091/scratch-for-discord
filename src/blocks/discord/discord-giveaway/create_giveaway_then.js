import * as Blockly from "blockly/core";

const blockName = "s4d_create_giveaway";

const blockData = {
    "message0": "%{BKY_CREATE_GIVEAWAY}",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": "Channel"
        },
        {
            "type": "input_value",
            "name": "DURATION",
            "check": ["String", "Number"]
        },
        {
            "type": "input_value",
            "name": "WINNERS",
            "check": ["String", "Number"]
        },
        {
            "type": "input_value",
            "name": "PRIZE",
            "check": ["String", "Number"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": false,
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    },
}

Blockly.JavaScript[blockName] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "THEN");
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const duration = Blockly.JavaScript.valueToCode(block, "DURATION", Blockly.JavaScript.ORDER_ATOMIC);
    const winnecount = Blockly.JavaScript.valueToCode(block, "WINNERS", Blockly.JavaScript.ORDER_ATOMIC);
    const prize = Blockly.JavaScript.valueToCode(block, "PRIZE", Blockly.JavaScript.ORDER_ATOMIC);
    var code = `s4d.manager.start(${channel}, {duration:ms(${duration}),winnerCount:Number(${winnecount}),prize:${prize}}).then(async (gData) => {\n${statements}\n});\n`
    return code
};