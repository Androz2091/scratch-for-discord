import Blockly from "blockly/core";

const blockName = "jg_minecraft_bedrock_get";

const blockData = {
    "message0": "get bedrock minecraft server with IP %1 port %2 then %3 %4",
    "args0": [
        {
            "type": "input_value", 
            "name": "IP",
            "check": ["String","var","Env"]
        },
        {
            "type": "input_value", 
            "name": "PORT",
            "check": ["String","var","Env","Number"]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        }
        
    ],
    "colour": 190,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Get a minecraft bedrock server to grab it's information.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const ip = Blockly.JavaScript.valueToCode(block, "IP", Blockly.JavaScript.ORDER_ATOMIC);
    const port = Blockly.JavaScript.valueToCode(block, "PORT", Blockly.JavaScript.ORDER_ATOMIC);
    const then = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `let S4D_APP_MC_GET_BEDROCK_OPTIONS = {
        timeout: 5000
    };
    S4D_APP_MC_GET.statusBedrock(String(${ip}), Number(${port}), S4D_APP_MC_GET_BEDROCK_OPTIONS)
    .then((result_bedrock) => {
        ${then}
    });
    `;
    return code;
};