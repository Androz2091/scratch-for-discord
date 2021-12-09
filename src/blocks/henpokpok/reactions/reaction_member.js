import * as Blockly from "blockly";


const blockName = "react_member";

const blockData = {
    "message0": "Reacting member",
    "colour": "#F0C55C",
    "tooltip":"react,remove reaction",
    "output": "Member"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["user", Blockly.JavaScript.ORDER_NONE];
    return code;
};

