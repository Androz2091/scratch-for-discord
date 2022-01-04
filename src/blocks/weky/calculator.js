import Blockly from "blockly/core";

const blockName = "s4d_cal";

const name = "Start a calculator with Embed title %1 %2 Embed color %3 %4 Embed footer %5 %6 Timestamp %7 %8 Calculator disabled message %9 %10 Invalid equation message %11";

const blockData = {
  "message0": `${name}`,
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
      "name": "color",
      "check": "Colour"
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
        "name": "DISABLED",
        "check": "String"
    },
    {
        "type": "input_space"
    },
    {
        "type": "input_value",
        "name": "INVALID",
        "check": "String"
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
const color = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC);
const footer = Blockly.JavaScript.valueToCode(block, "FOOTER", Blockly.JavaScript.ORDER_ATOMIC);
const time = Blockly.JavaScript.valueToCode(block, "TIMESTAMP", Blockly.JavaScript.ORDER_ATOMIC);
const disabled = Blockly.JavaScript.valueToCode(block, "DISABLED", Blockly.JavaScript.ORDER_ATOMIC);
const invalid = Blockly.JavaScript.valueToCode(block, "INVALID", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
    await Calculator({
        message: s4dmessage,
        embed: {
            title: ${title},
            color: ${color},
            footer: ${footer},
            timestamp: ${time}
        },
        disabledQuery: ${disabled},
        invalidQuery: ${invalid},
        othersMessage: 'Only <@{{author}}> can use the buttons!'
    });`;
    return code;
};
