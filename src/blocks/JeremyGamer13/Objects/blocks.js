import Blockly from "blockly/core";
Blockly.Blocks["jg_objects_create_new"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "create empty object",
                "colour": "#BA4A9A",
                "args0": [],
                "tooltip": "Create a new empty object so that it can be used.",
                "output": "Object"
            }
        );
    }
};

Blockly.JavaScript["jg_objects_create_new"] = function () {
    const code = `new Object()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks["jg_objects_set_key_to_value_in_object"] = {
    init: function () {
        this.jsonInit(
            {
                "message0": "set key %1 to value %2 in object %3",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "KEY",
                        "check": "String"
                    },
                    {
                        "type": "input_value",
                        "name": "VALUE",
                        "check": null
                    },
                    {
                        "type": "input_value",
                        "name": "OBJECT",
                        "check": "Object"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#BA4A9A",
                "tooltip": "Set a key in an object to any value.",
                "helpUrl": ""
            }
        );
    }
}
Blockly.JavaScript["jg_objects_set_key_to_value_in_object"] = function (block) {
    const key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, "OBJECT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${object}[String(${key})] = ${value}
    `
    return code;
};