import * as Blockly from "blockly/core";
const ahqcolor = ['#0EB22B', '#0EB22B', '#0EB22B', '#0EB22B'];
import { registerRestrictions } from "../../../../restrictions";

function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "dash_g";
//block working now working
const blockData = {
    "message0": "Server",
    "colour": listsGetRandomItem(ahqcolor, false),
    "tooltip": "",
    "helpUrl": "Server",
    "output": "Server"
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(){
    const code = [`guild`, Blockly.JavaScript.ORDER_NONE]
return code;
};

registerRestrictions(blockName, [
    {
        type: "blockexists",
        message: "RES_MISSING_AHQ_DASH_C_CONTENT",
        types: [
            "add_boolean_dash",
            "add_color_dash",
            "add_text_dash"
        ]
    }
]);