import Blockly from "blockly/core";

const blockName = "jg_minecraft_queryjava";

const blockData = {
    "message0": "query java minecraft server with IP %1 port %2 then %3 %4",
    "args0": [
        {
            "type": "input_value",
            "name": "IP",
            "check": ["String", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "PORT",
            "check": ["String", "var", "Env", "Number"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        }

    ],
    "colour": 85,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Query a java minecraft server to grab additional info. Only works if the server has enabled Query. Any query blocks are marked with a star.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const ip = Blockly.JavaScript.valueToCode(block, "IP", Blockly.JavaScript.ORDER_ATOMIC);
    const port = Blockly.JavaScript.valueToCode(block, "PORT", Blockly.JavaScript.ORDER_ATOMIC);
    const then = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `let S4D_APP_MC_GET_OPTIONS = {
        sessionID: 1,
        timeout: 35000
    };
    S4D_APP_MC_GET.queryFull(String(${ip}), Number(${port}), S4D_APP_MC_GET_OPTIONS)
    .then(async (result_query_java) => {
        ${then}
    });
    `;
    return code;
};