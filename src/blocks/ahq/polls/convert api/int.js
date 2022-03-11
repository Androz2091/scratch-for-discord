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
const blockName = "convert_api_code";
//block working now working
const blockData = {
    "type": "block_type",
    "message0": "Load convert api %1 api key %2 ",
    "args0": [{
        "type": "input_dummy"
    },
    {
        "type": "input_value",
        "name": "api",
        "check": "String"
    }],
    "colour": listsGetRandomItem(ahqcolor, false),
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(block){
    const code = `const CloudConvert = require('cloudconvert');
    const https = require("https");
    const ahqfs = require("fs");
    const cloudConvert = new CloudConvert(${Blockly.JavaScript.valueToCode(block, "api", Blockly.JavaScript.ORDER_ATOMIC)});`
return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_AHQ_CONTENT",
        types: [
            "api"
        ]
    }
]);