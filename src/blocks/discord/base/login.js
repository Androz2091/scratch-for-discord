import Blockly from "blockly";

const blockName = "s4d_login";

const blockData = {
    type: "block_type",
    message0: "Connect to discord with the token %1",
    args0: [
        {
            type: "input_value",
            name: "TOKEN",
            check: "String"
        }
    ],
    colour: "#3333ff",
    tooltip: "",
    helpUrl: ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const value = Blockly.JavaScript.valueToCode(block, "TOKEN", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `await s4d.client.login(${value}).catch((e) => {
        if(String(e).toLowerCase().includes('intents')) throw new Error('Intents must be turned on')
        if(String(e).toLowerCase().includes('token)) throw new Error('An invalid token was provided!')
    });\n`;
    return code;
};