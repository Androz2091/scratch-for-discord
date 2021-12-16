import Blockly from "blockly/core";

const blockName = "snake_js";

const NAME = "Start Snake game with embed title  %1 %2 Embed footer %3 %4 With timestamp %5 %6 Empty space emoji %7 %8 Snake body emoji %9 %10 With food emoji %11 %12 Cancel button text %13 %14 Embed Color %15";

const blockData = {
  "message0": `${NAME}`,
  "args0": [
    {
      "type": "input_value",
      "name": "TITLE",
      "Check": "String"
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "FOOTER",
      "check": "String"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "TIMESTAMP",
        "check": "Boolean"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "EMPTY",
        "check": "String"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "BODY",
        "check": "String"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "FOOD",
        "check": "String"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "CANCEL",
        "check": "String"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "COLOR",
        "check": "Colour"
    }
  ],
  "previousStatement": null,
  "nextStatement": null, 
  "colour": "#48a4f0",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const title = Blockly.JavaScript.valueToCode(block, "TITLE", Blockly.JavaScript.ORDER_ATOMIC);
const footer = Blockly.JavaScript.valueToCode(block, "FOOTER", Blockly.JavaScript.ORDER_ATOMIC);
const timestamp = Blockly.JavaScript.valueToCode(block, "TIMESTAMP", Blockly.JavaScript.ORDER_ATOMIC);
const empty = Blockly.JavaScript.valueToCode(block, "EMPTY", Blockly.JavaScript.ORDER_ATOMIC);
const body = Blockly.JavaScript.valueToCode(block, "BODY", Blockly.JavaScript.ORDER_ATOMIC);
const food = Blockly.JavaScript.valueToCode(block, "FOOD", Blockly.JavaScript.ORDER_ATOMIC);
const cancel = Blockly.JavaScript.valueToCode(block, "CANCEL", Blockly.JavaScript.ORDER_ATOMIC);
const color = Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC);
const code = `
    await Snake({
        message: s4dmessage,
        embed: {
            title: ${title},
            description: 'GG, you scored **{{score}}** points!',
            color: ${color},
            footer: ${footer},
            timestamp: ${timestamp}
        },
        emojis: {
            empty: ${empty},
            snakeBody: ${body},
            food: ${food},
            up: '⬆️',
            right: '⬅️',
            down: '⬇️',
            left: '➡️',
        },
        othersMessage: 'Only <@{{author}}> can use the buttons!',
        buttonText: ${cancel}
    });`;
    return code;
};
