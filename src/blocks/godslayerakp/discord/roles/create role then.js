import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "gsa_create_role";

const blockData = {
    "message0": "%{BKY_CREATE_ROLE}",
    "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": ["String", "Number"]
        },
        {
            "type": "input_value",
            "name": "SERVER",
            "check": ["Server"]
        },
        {
            "type": "input_value",
            "name": "COLOR",
            "check": "Colour"
        }

    ],
    "colour": "#4C97FF",
    "output": "Role",
    "inputsInline": false,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const color = Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC)
    const code = `${server}.roles.create({ name: ${name},color:${color} })`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
registerRestrictions("gsa_create_role", [
    {
        type: "hasparent",
        message: "$This block has been updated in the toolbox.\nTry looking for: create role with name () in server () with color () then do",
        types: ["!%%@@%#%EWFWEG@$#Y${^U)I^$%()OJ$E@WMLDCSOHG$R*#HT$#R(EWOJFWEDSNF*G$#IF$O)@#_+2---=3r]f][ds"]
    }
]);