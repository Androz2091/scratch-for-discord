import Blockly from "blockly/core";

const blockName = "jg_tests_onchange";

const blockData = {
    "message0": "On change %1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "A",
            "options": [
                [
                    "A1",
                    '"a1"'
                ],
                [
                    "A2",
                    '"a2"'
                ],
                [
                    "A3",
                    '"a3"'
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
        console.log("something");
        this.setColour(Math.floor(Math.random() * 360))
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const A = block.getFieldValue("A");
    const code = `${A}`;
    return code;
};