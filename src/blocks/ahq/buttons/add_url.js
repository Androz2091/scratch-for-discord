import * as Blockly from "blockly";
const blockName = "url_ahq_button";

const blockData = {
    "message0": "set url/id %1 %2 to button %3",
    "args0": [
        {
            "type": "input_value",
            "name": "Label",
            "check": ["String"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "button name",
            "check": "String"
        },
    ],
    "colour": '#33cc00',
    "previousStatement": null,
    "nextStatement": null,
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function (block) {
    let code = "";
    const name = Blockly.JavaScript.valueToCode(block, "button name", Blockly.JavaScript.ORDER_NONE);
    const finaln = name.replace("'", "").replace("'", "");
    const statementsThen = Blockly.JavaScript.valueToCode(block, "Label", Blockly.JavaScript.ORDER_NONE);
    if (statementsThen.includes("https://")) {
        code = `${finaln}.setURL(${statementsThen});`;
    } else {
        code = `${finaln}.setCustomId(${statementsThen});`;
    }
    return code;
};
