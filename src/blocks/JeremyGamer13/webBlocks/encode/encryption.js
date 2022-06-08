import Blockly from "blockly/core";
Blockly.Blocks["jg_encryption_encrypt_text"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "%2 text %1 with key %3",
                "inputsInline": true,
                "args0": [
                    {
                        "type": "input_value",
                        "name": "encode",
                        "check": ["String", "var", "Env"]
                    },
                    {
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            [
                                "encrypt",
                                '0'
                            ],
                            [
                                "decrypt",
                                '1'
                            ]
                        ],
                    },
                    {
                        "type": "input_value",
                        "name": "key",
                        "check": ["String", "var", "Env"]
                    }
                ],
                "colour": 205,
                "output": "String",
                "tooltip": "Encrypt/Decrypt text using the current secret key. The secret key should REALLY be in a process.env block!",
                "helpUrl": ""
            }
        );
    }
};

Blockly.JavaScript["jg_encryption_encrypt_text"] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "encode", Blockly.JavaScript.ORDER_ATOMIC);
    const key = Blockly.JavaScript.valueToCode(block, "key", Blockly.JavaScript.ORDER_ATOMIC);
    const type = block.getFieldValue("TYPE")
    if (type == 0) {
        return [`S4D_APP_CRYPTOJS.AES.encrypt(${text}, ${key}).toString()`, Blockly.JavaScript.ORDER_NONE];
    } else {
        return [`S4D_APP_CRYPTOJS.AES.decrypt(${text}, ${key}).toString(S4D_APP_CRYPTOJS.enc.Utf8)`, Blockly.JavaScript.ORDER_NONE];
    }
};
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
//afoieh
Blockly.Blocks["catsoup_encryption_sha256"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "encrypt %1 with SHA256",
                "inputsInline": true,
                "args0": [{
                    "type": "input_value",
                    "name": "encode",
                    "check": ["String", "var", "Env"]
                }],
                "colour": 205,
                "output": "String",
                "tooltip": "Encrypt some text using SHA256",
                "helpUrl": ""
            }
        );
    }
};

Blockly.JavaScript["catsoup_encryption_sha256"] = function (block) {
    const text = Blockly.JavaScript.valueToCode(block, "encode", Blockly.JavaScript.ORDER_ATOMIC);
    return [`S4D_APP_CRYPTOJS.SHA256(${text})`, Blockly.JavaScript.ORDER_NONE];
};