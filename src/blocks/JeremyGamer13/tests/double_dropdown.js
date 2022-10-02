import Blockly from "blockly/core";

const blockName = "jg_tests_doubleDropdown";

const blockData = {
    "message0": "Dropdown #1 %1 Dropdown #2 %2",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "A",
            "options": [
              [
                "A1",
                'a1'
              ],
              [
                "A2",
                'a2'
              ],
              [
                "A3",
                'a3'
              ]
            ],
        },
        {
            "type": "field_dropdown",
            "name": "B",
            "options": [
              [
                "B1",
                'b1'
              ],
              [
                "B2",
                'b2'
              ],
              [
                "B3",
                'b3'
              ]
            ],
        }
    ],
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const A = block.getFieldValue("A");
    const B = block.getFieldValue("B");
    const code = `${A}${B}`;
    return code;
};