import Blockly from "blockly/core";

const blockName = "jg_tests_validator";

const blockData = {
    "message0": "Validator %1",
    "args0": [
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
    ],
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    },
    onchange: function () {
        let A = this.getFieldValue("A");
        console.log(A);
        if (A != 1) {
            this.setColour(0);
            return;
        }
        this.setColour(90);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const A = block.getFieldValue("A");
    const code = `${A}`;
    return code;
};