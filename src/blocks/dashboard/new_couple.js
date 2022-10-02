import Blockly from "blockly/core";

const blockName = "new_couple";

const blockData = {
    "type": "new_couple",
    "message0": "Create a new item for the list %1 Name (will be displayed) %2 ID (value that will be sent) %3",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "NAME"
        },
        {
            "type": "input_value",
            "name": "ID"
        }
    ],
    "output": null,
    "colour": 245,
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['new_couple'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `[${value_id}, ${value_name}]`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};