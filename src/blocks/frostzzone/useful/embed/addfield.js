import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "frost_add_field";

const blockData = {
    "message0": "Add field %1 Title %2 Description %3 Inline %4",
    "args0": [
        {
            "type":"input_dummy"
        },
        {
            "type":"input_value",
            "name":"TITLE",
            "check":"String"
        },
        {
            "type":"input_value",
            "name":"DESCRIPTION",
            "check":"String"
        },
        {
            "type":"input_value",
            "name":"INLINE",
            "check":"Boolean"
        }
    ],
    "colour": "#40BF4A",
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
    const fielddescription = Blockly.JavaScript.valueToCode(block, "DESCRIPTION", Blockly.JavaScript.ORDER_ATOMIC);
    const fieldtitle = Blockly.JavaScript.valueToCode(block, "TITLE", Blockly.JavaScript.ORDER_ATOMIC);
    const inline = Blockly.JavaScript.valueToCode(block, "INLINE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `{ name: String(${fieldtitle}), value: String(${fielddescription}), inline: ${inline} },\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "FROST_RES_MUST_BE_CREATE_FIELD",
        types: [
            "frost_create_field"
        ]
    }
]);