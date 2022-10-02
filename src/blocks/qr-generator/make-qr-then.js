import * as Blockly from "blockly/core";

const blockName = "create_qr_then";

const blockData = {
    "message0": "Create a text QR code with the URL %1 then %2 %3",
    "args0": [{
        "type": "input_value",
        "name": "URL",
        "check": "String"
    },
    {
        "type": "input_dummy"
    },
    {
        "type": "input_statement",
        "name": "THEN"
    },
    ],
    "colour": "#D14081",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "tooltip": "Create a text QR code.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const statements = Blockly.JavaScript.statementToCode(block, "THEN");
    const URL = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `QRCode.toString(${URL}, { type: "image" }, async (err, QR) => {
        if(err) return console.warn('There was an error while creating the QR code')
        ${statements}
    })`;
    return code;
};
