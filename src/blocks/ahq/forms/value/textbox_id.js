import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";
const blockName = "id_textbox_ahq";
//block working now working
const blockData = {
    "message0": "TextBox Value; Id: %1",
    "args0": [{
        "type": "input_value",
        "name": "id",
        "check": "String"
    }],
    "colour": '#33cc00',
    "output": "String",
    "tooltip": "The text entered in the textbox with the ID specified.",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    const code = [`(i.getTextInputValue(${Blockly.JavaScript.valueToCode(block, "id", Blockly.JavaScript.ORDER_NONE)}))`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_AHQ_CONTENT",
        types: [
            "id"
        ]
    }
]);
