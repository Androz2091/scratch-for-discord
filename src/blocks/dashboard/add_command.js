import Blockly from "blockly/core";

const blockName = "add_command_dash";

const blockData = {
    "type": "add_command_dash",
    "message0": "Add a new command with %1 Name %2 Description %3 Command usage %4",
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
            "name": "DESC"
        },
        {
            "type": "input_value",
            "name": "tutorial"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 257,
    "tooltip": "",
    "helpUrl": ""
}
Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['add_command_dash'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_desc = Blockly.JavaScript.valueToCode(block, 'DESC', Blockly.JavaScript.ORDER_ATOMIC);
    var value_tutorial = Blockly.JavaScript.valueToCode(block, 'tutorial', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    s4d.client.dashboard.registerCommand(${value_name}, ${value_desc}, ${value_tutorial});
`;
    return code;
};