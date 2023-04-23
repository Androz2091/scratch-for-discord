import Blockly from "blockly/core";

const blockName = "jg_minecraft_rcon_create_client";

const blockData = {
    "message0": "create RCON client and connect to IP %1 using RCON port %2 with password %5 then %3 %4",
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
        },
        {
            "type": "input_value",
            "name": "PASSWORD",
            "check": ["String", "var", "Env", "Number"]
        }

    ],
    "colour": 160,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Connect to a Java server using RCON to run commands. RCON must be enabled on the server and match the settings. RCON can run any command on the server including operator commands, so be careful!",
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
    const password = Blockly.JavaScript.valueToCode(block, "PASSWORD", Blockly.JavaScript.ORDER_ATOMIC);
    const then = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `let S4D_APP_MC_RCON_CLIENT_OPTIONS = {
        timeout: 5000
    };
    var S4D_APP_MC_RCON_CLIENT = new S4D_APP_MC_GET.RCON();
    await S4D_APP_MC_RCON_CLIENT.connect(String(${ip}), Number(${port}), S4D_APP_MC_RCON_CLIENT_OPTIONS);
    await S4D_APP_MC_RCON_CLIENT.login(String(${password}), S4D_APP_MC_RCON_CLIENT_OPTIONS);
    ${then}
    `;
    return code;
};