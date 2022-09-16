import Blockly from "blockly/core";

const blockName = "add_text_input";

const blockData = {
    "type": "add_text_input",
    "message0": "Add a text input %1 Set input title to %2 Set input description to %3 %4 Set input ID to (DO NOT INCLUDE SPACES)  %5 %6 Set validator %7 Set value setter %8 Set value getter %9 Default value getter value %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": "String"
        },
        {
            "type": "field_input",
            "name": "description",
            "text": "My input"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "name",
            "text": "My input"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "validator"
        },
        {
            "type": "input_statement",
            "name": "setter"
        },
        {
            "type": "input_value",
            "name": "getter"
        },
        {
            "type": "input_value",
            "name": "gett_def",
            "check": "String"
        }
    ],
    "inputsInline": false,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript['add_text_input'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var text_description = block.getFieldValue('description');
    var text_name = block.getFieldValue('name');
    var value_validator = Blockly.JavaScript.valueToCode(block, 'validator', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_setter = Blockly.JavaScript.statementToCode(block, 'setter');
    var value_getter = Blockly.JavaScript.valueToCode(block, 'getter', Blockly.JavaScript.ORDER_ATOMIC);
    var value_gett_def = Blockly.JavaScript.valueToCode(block, 'gett_def', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    const validator_${text_name} = value => ${value_validator};
    const setter_${text_name} = (discordClient, guild, value) => ${statements_setter}
    const getter_${text_name} = (discordClient, guild) => ${value_getter} || ${value_gett_def};

    s4d.client.dashboard.addTextInput(${value_name}, '${text_description}', validator_${text_name}, setter_${text_name}, getter_${text_name});
`;
    return code;
};