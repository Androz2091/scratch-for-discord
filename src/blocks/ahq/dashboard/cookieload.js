import * as Blockly from "blockly/core";
const ahqcolor = ['#0EB22B', '#0EB22B', '#0EB22B', '#0EB22B'];
import { registerRestrictions } from "../../../restrictions";

function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "load_cookie";
//block working now working
const blockData = {
    "message0": "Cookie",
    "colour": listsGetRandomItem(ahqcolor, false),
    "tooltip": "",
    "helpUrl": "Load cookies in dash",
    "output": "ahq_cookie"
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(){
    const code = [`cookies_config`, Blockly.JavaScript.ORDER_NONE]
return code;
};

registerRestrictions(blockName, [
    {
        type: "blockexists",
        message: "RES_MISSING_AHQ_DASH_CONTENT",
        types: [
            "make_cookie"
        ]
    }
]);