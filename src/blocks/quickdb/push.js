import Blockly from 'blockly'

const blockName = 'qdb_push'

const blockData = {
    "message0": "Push %1 to the list %2 in SQLite db",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        },
        {
            "type": "input_value",
            "name": "DATA",
            "check": [ "String", "Number" ]
        }
    ],
    "nextStatement": null,
    "previousStatement": null,
    "colour": "#5ba58b",
    "helpUrl": ""
}
Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
}
Blockly.JavaScript[blockName] = function(block) {
    const key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
    const data = Blockly.JavaScript.valueToCode(block, "DATA", Blockly.JavaScript.ORDER_ATOMIC);
    return `qdb.push(String(${key}), ${data})\n`;
};