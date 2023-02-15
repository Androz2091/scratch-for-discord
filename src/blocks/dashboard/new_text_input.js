import Blockly from "blockly/core";

const blockName = "add_text_input";

const blockData = {
    "type": "add_text_input",
    "message0": "Add a text input %1 Set input title to %2 Set input description to %3 Set input ID to %4 %5 Set validator %6 Set value setter %7 Set value getter %8 Default value getter value %9",
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
            "type": "input_value",
            "name": "description",
            "check": "String"
        },
        {
            "type": "field_input",
            "name": "name",
            "text": "My_text_input"
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
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
} 


Blockly.Blocks[blockName] = {

    init: function () {
        this.jsonInit(blockData);
    },

    validate: function (value) {
        return value.replace(/ /g, '_');
    },
};

Blockly.JavaScript['add_text_input'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_description = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);
    var text_name = block.getFieldValue('name');
    text_name = text_name.replace(/ /g, '_');
    var value_validator = Blockly.JavaScript.valueToCode(block, 'validator', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_setter = Blockly.JavaScript.statementToCode(block, 'setter');
    var value_getter = Blockly.JavaScript.valueToCode(block, 'getter', Blockly.JavaScript.ORDER_ATOMIC);
    var value_gett_def = Blockly.JavaScript.valueToCode(block, 'gett_def', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    const validator_${text_name} = value => ${value_validator};
    const setter_${text_name} = (discordClient, guild, value) => ${statements_setter}
    const getter_${text_name} = async(discordClient, guild) => {
        ${value_getter} || ${value_gett_def};
    }

    s4d.client.dashboard.addTextInput(${value_name}, ${value_description}, validator_${text_name}, setter_${text_name}, getter_${text_name});
`;
    return code;
};