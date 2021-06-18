import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_draw_image";

const blockData = {
    "message0": "%{BKY_DRAW_IMAGE}",
    "args0": [
        {
            "type": "input_value",
            "name": "CANVAS_NAME",
            "check": [ "Number", "String" ]
        },
        {
            "type": "input_value",
            "name": "X",
            "check": [ "Number", "String" ]
        },
        {
            "type": "input_value",
            "name": "Y",
            "check": [ "Number", "String" ]
        },
        {
            "type": "input_value",
            "name": "SIZEX",
            "check": [ "Number", "String" ]
        },
        {
            "type": "input_value",
            "name": "SIZEY",
            "check": [ "Number", "String" ]
        }
    ],
    "colour": "#40bfbf",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const canvasname = Blockly.JavaScript.valueToCode(block, "CANVAS_NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const x = Blockly.JavaScript.valueToCode(block, "X", Blockly.JavaScript.ORDER_ATOMIC);
    const y = Blockly.JavaScript.valueToCode(block, "Y", Blockly.JavaScript.ORDER_ATOMIC);
    const sizex = Blockly.JavaScript.valueToCode(block, "SIZEX", Blockly.JavaScript.ORDER_ATOMIC);
    const sizey = Blockly.JavaScript.valueToCode(block, "SIZEY", Blockly.JavaScript.ORDER_ATOMIC);
    const nname = canvasname.replace(`'`,'')
    const nnname = nname.replace(`'`,'')
    const code = `${nnname}ctx.drawImage(s4dimage,(${x}|1),(${y}|1),(${sizex}|1),(${sizey}|1));\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_MUST_BE_IN_LOAD_IMAGE_THEN",
        types: [
            "s4d_load_image_then"
        ]
    }
]);