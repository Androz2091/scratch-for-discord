import * as Blockly from "blockly/core";

const blockName = "s4d_get_all_channel";

const blockData = {
    "message0": "get all channel in server %1 then for each %2 do %3",
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
    "colour": "#a55b80",
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
    let code = `${server}.channels.cache.forEach(async (c) =>{ \n ${statementThen} \n})\n`;
    return code;
};