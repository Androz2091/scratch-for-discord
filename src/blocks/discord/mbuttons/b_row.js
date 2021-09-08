import * as Blockly from "blockly/core";


const blockName = "b_row";

const blockData = {
    "message0": "%{BKY_B_ROW}",
    "args0": [{
            "type": "input_statement",
            "name": "THEN"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "BUTTON_NAME",
            "check": "String"
        },
    ],
    "colour": "#4C97FF",
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
    const statements = Blockly.JavaScript.statementToCode(block, "THEN");
    const name = Blockly.JavaScript.valueToCode(block, "BUTTON_NAME", Blockly.JavaScript.ORDER_ATOMIC);
    let text1 = name.replace("'","")
    let name2 = text1.replace("'","")
    const code = `const ${name2} = new MessageActionRow()\n${statements}\n`
    return code;
};