import Blockly from "blockly/core";

const blockName = "s4d_clear_all_data";

const blockData = {
    "message0": "%{BKY_CLEAR_ALL_DATA}",
    "colour": "#5ba58b",
    "helpUrl": "",
    "previousStatement": null,
    "nextStatement": null
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return [ 's4d.database.clear()', Blockly.JavaScript.ORDER_ATOMIC ];
};
