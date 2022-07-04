import * as Blockly from "blockly/core";

const blockName = "s4d_get_all_role";

const blockData = {
    "message0": "get all roles in server %1 then for each %2 do %3",
    "args0": [{
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
    "colour": "#2EB66B",
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
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    let code = `${server}.roles.cache.forEach(async (ro) =>{ \n ${statementThen} \n})\n`;
    return code;
};