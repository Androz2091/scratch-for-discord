import Blockly from "blockly/core";

const blockName = "express_var";

const blockData = {
    "type": "block_type",
    "message0": "Variable %1 %2 = %3 %4",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "const",
                'const'
              ],
              [
                "var",
                'var'
              ],
              [
                "let",
                'let'
              ],
              [
                "set",
                'set'
              ]
            ],
        },
        {
            "type": "input_value",
            "name": "VAR",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "CONTENT"
        },
        {
            "type": "field_dropdown",
            "name": "COLON",
            "options": [
              [
                ";",
                ';'
              ],
              [
                " ",
                ''
              ]
            ],
        }
    ],
    "colour": "#a55b80",
    "tooltip": "",
    "helpUrl": "",
  "previousStatement": null,
    "nextStatement": null
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const type = block.getFieldValue("TYPE") == 'set' ? '' : block.getFieldValue("TYPE");
    const vab = Blockly.JavaScript.valueToCode(block, "VAR", Blockly.JavaScript.ORDER_ATOMIC);
    const vab2 = vab.substring(1, (vab.length - 1));
    const content = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
    const colon = block.getFieldValue("COLON");
    const code = `${type} ${vab2} = ${content}${colon}
`
    return code
};
