import Blockly from "blockly/core";

const blockName = "s4d_menu_click_id";

const blockData = {
    "message0": "%{BKY_MENU_ID}",
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
    const code = ["i.customId", Blockly.JavaScript.ORDER_NONE];
    return code;
};
