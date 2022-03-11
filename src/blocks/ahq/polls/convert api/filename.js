import * as Blockly from "blockly/core";
const ahqcolor = ['#40BF4A', '#40BF4A', '#40BF4A', '#40BF4A'];
import { registerRestrictions } from "../../../../restrictions";

function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "convert_api_file";
//block working now working
const blockData = {
    "message0": "Filename of converted task",
    "args0": [],
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(){
    const code = [`file.filename`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notblockexists",
        messae: "RES_MISSING_AHQ_BLOCK",
        types: [
            "save_api_code"
        ]
    },
    {
        type: "hasparent",
        message: "RES_MISSING_AHQ_SUPER_CONTENT",
        types: [
            "convert_api_task"
        ]
    }
]);