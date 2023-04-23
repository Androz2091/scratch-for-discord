import * as Blockly from "blockly";
const blockName = "footer_ahq_embed";

const blockData = {
    "message0": "Set Footer %1 image %2 %3 Embed %4",
    "args0": [
        {
            "type": "input_value",
            "name": "Label",
            "check": ["String"]
        },
        {
            "type": "input_value",
            "name": "image",
            "check": ["String"]
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
    let extra = "";
    const name = (Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE) || "embed");
    const finaln = name.replace("'", "").replace("'", "");
    const statementsThen = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const ahq = Blockly.JavaScript.valueToCode(block, "image", Blockly.JavaScript.ORDER_NONE) || null;
    if (ahq !== null) {
        extra = `, ${ahq}`
    }
    const code = `${finaln}.setFooter(${statementsThen}${extra});`;
    return code;
};