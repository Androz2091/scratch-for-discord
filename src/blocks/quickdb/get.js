import Blockly from "blockly/core";

const blockName = "qdb_get";

const blockData = {
    "message0": "Get the value %1 from the SQLite DB",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        }
    ],
    "output": null,
    "colour": "#5ba58b",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
    return [ `await qdb.get(${key})\n`, Blockly.JavaScript.ORDER_ATOMIC ];
};
