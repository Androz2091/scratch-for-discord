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