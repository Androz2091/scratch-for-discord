import Blockly from "blockly/core";

const blockName = "jg_object_getvalue";
// "colour": "#cc59e3",
const blockData = {
    "message0": "get value %1 from object %2",
    "inputsInline": true,
    "colour": "#BA4A9A",
    "args0": [
        {
            "type": "input_value",
            "name": "value",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "object",
            "check": "Object"
        }
    ],
    "output": null,
    "tooltip": "A value of an object.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const value = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
    const objraw1 = Blockly.JavaScript.valueToCode(block, "object", Blockly.JavaScript.ORDER_ATOMIC);
    const objraw2 = String(objraw1).replaceAll("(", "")
    const object = String(objraw2).replaceAll(")", "")
    const code = [`${object}[String(${value})]`, Blockly.JavaScript.ORDER_NONE];
    return code;
};
