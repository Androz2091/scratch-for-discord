import Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";
Blockly.Blocks["jg_text_for_each_letter_in_text_do"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "for each letter in text %1 %2 do %3",
                "colour": "%{BKY_TEXTS_HUE}",
                "tooltip": "Run the blocks inside for every letter that is in the text, including spaces & symbols.",
                "previousStatement": null,
                "nextStatement": null,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "TEXT",
                        "check": ["String", "Var", "var", "Env"]
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "STATEMENTS"
                    }
                ]
            }
        );
    }
}
Blockly.JavaScript["jg_text_for_each_letter_in_text_do"] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `[...String(${text})].forEach(async (letter_inText) => {
  ${statements}
});
`;
    return code;
};
Blockly.Blocks["jg_text_for_each_letter_in_text_do_letter"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "letter",
                "args0": [],
                "colour": "%{BKY_TEXTS_HUE}",
                "output": "String",
                "tooltip": "The letter the loop is currently looking at.",
                "helpUrl": ""
            }
        );
    }
};

Blockly.JavaScript["jg_text_for_each_letter_in_text_do_letter"] = function () {
    return [`letter_inText`, Blockly.JavaScript.ORDER_NONE];
};
registerRestrictions("jg_text_for_each_letter_in_text_do_letter", [
    {
        type: "hasparent",
        message: "$This block needs to be placed inside of a \"for each letter in text do\" block!",
        types: [
            "jg_text_for_each_letter_in_text_do"
        ]
    }
]);