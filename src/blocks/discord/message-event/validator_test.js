import Blockly from "blockly/core";

const blockName = 'validator_test'

const blockData = {
    "message0": "Amongus",
    "colour": "#187795",
    "output": "Member",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {

    validate: function (newValue) {
        this.getSourceBlock().updateConnections(newValue);
        return newValue;
    },


    init: function () {
        this.jsonInit(blockData);
        var options = [
            ['has neither', 'NEITHER'],
            ['has statement', 'STATEMENT'],
            ['has value', 'VALUE'],
            ['has dropdown', 'DROPDOWN'],
        ];

        this.appendDummyInput()
            // Pass the field constructor the options list, the validator, and the name.
            .appendField(new Blockly.FieldDropdown(options, this.validate), 'MODE');
    },
    updateConnections: function (newValue) {
        var options = [
            ['amongus', 'NEITHER'],
            ['sussy baka', 'STATEMENT'],
            ['super idol', 'VALUE'],
            ['malix worst CEO', 'DROPDOWN'],
        ];
        this.removeInput('STATEMENT', /* no error */ true);
        this.removeInput('sus', /* no error */ true);
        this.removeInput('VALUE', /* no error */ true);
        if (newValue == 'STATEMENT') {
            this.appendStatementInput('STATEMENT');
        } else if (newValue == 'VALUE') {
            this.appendValueInput('VALUE');
        } else if (newValue == 'DROPDOWN') {
            this.appendDummyInput('sus').appendField(new Blockly.FieldDropdown(options), 'amongus')
        }

    }
};