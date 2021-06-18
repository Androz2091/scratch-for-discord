import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_load_image_then";

const blockData = {
    "message0": "%{BKY_LOAD_IMAGE_THEN}",
    "args0": [
        {
            "type": "input_value",
            "name": "IMAGE_URL",
            "check": [ "Number", "String"  ]
        },
        {
            "type": "input_statement",
            "name": "THEN"
        },
    ],
    "colour": "#40bfbf",
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
    const url = Blockly.JavaScript.valueToCode(block, "IMAGE_URL", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `
canvas.loadImage(${url}).then((s4dimage) =>{
    ${statementThen}
});\n`;
    return code;
    
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message"
        ]
    }
]);