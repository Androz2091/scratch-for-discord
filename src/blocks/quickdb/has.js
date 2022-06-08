import Blockly from "blockly/core";

const blockName = "qdb_has_data";

const blockData = {
    "message0": "%1 Exist in SQLite DB?",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        }
    ],
    "output": "Boolean",
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
    return [ 'qdb.has(String('+key+'))', Blockly.JavaScript.ORDER_ATOMIC ];
};
