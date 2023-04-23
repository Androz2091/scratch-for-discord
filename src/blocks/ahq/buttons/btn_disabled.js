import * as Blockly from "blockly";
const blockName = "d_ahq_button";

const blockData = {
    "message0": "disable %1 %2 button %3",
    "args0": [
        {
            "type": "input_value",
            "name": "Label",
            "check": ["Boolean"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
    ],
    "colour": ('#33cc00'),
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const name = Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE);
    const finaln = name.replace("'", "").replace("'", "");
    const statementsThen = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    const code = `${finaln}.setDisabled(${statementsThen});`;
    return code;
};