import * as Blockly from "blockly";
const blockName = "color_ahq_embed";

const blockData = {
    "message0": "Set Colour %1 %2 Embed %3",
    "args0": [
        {
            "type": "input_value",
            "name": "Label",
            "check": ["String", "Colour"]
        },
        {
            "type": "input_space"
        },
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
    ],
    "colour": '#40BF4A',
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const name = (Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE) || "embed");
    const finaln = name.replace("'", "").replace("'", "");
    const statementsThen = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const code = `${finaln}.setColor(${statementsThen});`;
    return code;
};