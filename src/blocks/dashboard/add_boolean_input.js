import Blockly from "blockly/core";

const blockName = "add_boolean_input";

const blockData = Blockly.Blocks['add_boolean_input'] = {
    "type": "add_boolean_input",
    "message0": "Add a boolean input %1 Set input title to %2 Set input description to %3 Set input ID to %4 %5 Set value setter %6 Set value getter %7",
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
            "text": "My_boolean_input"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "setter"
        },
        {
            "type": "input_value",
            "name": "getter"
        }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['add_boolean_input'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_description = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);
    var text_name = block.getFieldValue('name');
    text_name = text_name.replace(/ /g, '_');
    var statements_setter = Blockly.JavaScript.statementToCode(block, 'setter');
    var value_getter = Blockly.JavaScript.valueToCode(block, 'getter', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    const setter_${text_name} = (discordClient, guild, value) => ${statements_setter}
    const getter_${text_name} = async(discordClient, guild) => {
        return ${value_getter||false}
    };

    s4d.client.dashboard.addBooleanInput(${value_name}, ${value_description}, setter_${text_name}, getter_${text_name});
`;
    return code;
};