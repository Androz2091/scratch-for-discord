import * as Blockly from "blockly/core";

const blockName = "fz_get_all_emoji";

const blockData = {
    "message0": "In server (optional) %1 get all emojis then for each cached emoji %2 do %3",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        },
    ],
    "colour": "#187795",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    let server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    if ((server || null) == null) {
        server = `(s4d.client)`
    }
    let code = `${server}.emojis.cache.forEach(async emoj =>{ \n ${statementThen} \n})\n`;
    return code;
};