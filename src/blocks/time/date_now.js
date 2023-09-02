import * as Blockly from "blockly/core";

const blockName = "s4d_date_now";

const blockData = {
    "message0": "%{BKY_CURRENT_TIMESTAMP}",
    "output": null,
    "colour": "#6f92bf",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
    return ['Date.now()', Blockly.JavaScript.ORDER_NONE];
};
