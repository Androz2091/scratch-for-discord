import * as Blockly from "blockly/core";

const blockName = "s4d_get_all_server";

const blockData = {
    "message0": "get all server then for each %1 do %2",
    "args0": [{
        "type": "input_dummy"
    },
    {
        "type": "input_statement",
        "name": "THEN"
    },
    ],
    "colour": "#D85E47",
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
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    let code = `s4d.client.guilds.cache.forEach(async (s) =>{ \n ${statementThen} \n})\n`;
    return code;
};