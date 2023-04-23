import Blockly from "blockly/core";

const blockName = "s4d_backup_id";

const blockData = {
    "message0": "%{BKY_BACKUP_ID}",
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
    const code = ["backupData.id", Blockly.JavaScript.ORDER_NONE];
    return code;
};
