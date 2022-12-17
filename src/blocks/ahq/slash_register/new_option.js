import * as Blockly from "blockly/core";

const blockName = "s4d_reg_new_options";
//block working now working
const blockData = {
    "message0": "Add option",
    "args0": [],
    "colour": '#33cc00',
    "previousStatement": null,
    "nextStatement": null,
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(){
    const code = `,\n`;
    return code;
};
