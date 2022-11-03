import * as Blockly from "blockly";
const blockName = "style_ahq_modal";

const blockData = {
    "message0": "Text Box Style %1",
    "args0": [
        {
      "type": "field_dropdown",
      "name": "Label",
      "options": [
        [
            "Short Answer",
            "'SHORT'"
        ],
        [
            "Paragraph",
            "'LONG'"
        ]
      ],
    }
    ],
    "output": "ahq_style",
    "colour": '#40BF4A',
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block) {
    const statementsThen = block.getFieldValue("Label");
    const code = [`${statementsThen}`, Blockly.JavaScript.ORDER_NONE];
    return code;
};