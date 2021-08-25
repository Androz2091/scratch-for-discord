import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_get_all_server_server";

const blockData = {
    "message0": "%{BKY_GET_ALL_SERVER_SERVER}",
    "args0": [
    ],
    "colour": "#D85E47",
    "output": "Server",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
return [ `s`, Blockly.JavaScript.ORDER_NONE ];
};
registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_GET_ALL_SERVER_PARENT",
        types: [
            "s4d_get_all_server"
        ]
    }
]);
