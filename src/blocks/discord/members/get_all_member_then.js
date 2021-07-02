import * as Blockly from "blockly/core";

const blockName = "s4d_get_all";

const blockData = {
    "message0": "%{BKY_GET_ALL}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
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
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    let code = `${server}.members.cache.forEach(m =>{ \n ${statementThen} \n})\n`;
    return code;
};
