import * as Blockly from "blockly/core";
const ahqcolor = ['#33cc00', '#33cc00', '#33cc00', '#33cc00'];
import { registerRestrictions } from "../../../../../restrictions"
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "convert_embed";
//block working now working
const blockData = {
    "message0": "Embed(s) %1",
    "args0": [{
        "type": "input_value",
        "name": "buton",
        "check":"String"
    }],
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "AHQEmbeds",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block){
    const code = [Blockly.JavaScript.valueToCode(block, "buton", Blockly.JavaScript.ORDER_NONE).replace("'", "").replace("'", ""), Blockly.JavaScript.ORDER_NONE];
    return code;
}
    registerRestrictions(blockName, [
        {
            "message": "RES_MISSING_AHQ_CONTENT",
            "type": "notempty",
            types: [
                "buton"
            ]
        }
    ]);