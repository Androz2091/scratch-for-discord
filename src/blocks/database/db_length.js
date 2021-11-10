import Blockly from "blockly/core";

const blockName = "s4d_db_length";

const blockData = {
    "message0": "%{BKY_DATABASE_LENGTH}",
    "colour": "#5ba58b",
    "helpUrl": "",
    "output": "Number"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return [ 's4d.database.all().length', Blockly.JavaScript.ORDER_ATOMIC ];
};
