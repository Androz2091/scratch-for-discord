import Blockly from "blockly/core";

const blockName = "s4d_menu_value";

const blockData = {
    "message0": "%{BKY_MENU_VALUE}",
    "colour": "#187795",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["i.values[0]", Blockly.JavaScript.ORDER_NONE];
    return code;
}; 

