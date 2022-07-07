import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";


const blockName = "load_cookie";
//block working now working
const blockData = {
    "message0": "cookie",
    "colour": '#0EB22B',
    "tooltip": "Load cookies in dash",
    "helpUrl": "",
    "output": "ahq_cookie"
};


Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function () {
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