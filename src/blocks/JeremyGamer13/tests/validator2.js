import Blockly from "blockly/core";

const blockName = "jg_tests_validator2";

const blockData = {
    "message0": "Validator #2",
    "args0": [],
    "colour": 0,
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
        let options = [
            ['A1', '0'],
            ['A2', '1'],
            ['A3', '2']
        ];
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(options, this.validate), 'A');
    },
    updateConnections: function (newValue) {
        this.updateShape();
        this.removeInput('B', /* no error */ true);
        this.removeInput('C', /* no error */ true);
        if (newValue == 1) {
            let options = [
                ['B1', '3'],
                ['B2', '4'],
                ['B3', '5']
            ];
            this.appendDummyInput().appendField(new Blockly.FieldDropdown(options), 'B');
        } else if (newValue == 2) {
            let options = [
                ['C1', '6'],
                ['C2', '7'],
                ['C3', '8']
            ];
            this.appendDummyInput().appendField(new Blockly.FieldDropdown(options), 'C');
        }
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const A = block.getFieldValue("A");
    var B = "";
    if (block.getFieldValue("B")) {
        B = block.getFieldValue("B");
    }
    const code = `${A}${B}`;
    return code;
};

/*

        {
            "type": "field_dropdown",
            "name": "A",
            "options": [
                [
                    "A1",
                    "0"
                ],
                [
                    "A2",
                    "1"
                ],
                [
                    "A3",
                    "2"
                ]
            ],
        }
    
*/