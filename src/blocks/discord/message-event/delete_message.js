import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_delete";

const blockData = {
    "message0": "%{BKY_DELETE_MESSAGE}",
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

javascriptGenerator.forBlock[blockName] = function(){
    const code = `await s4dmessage.delete();\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message"
        ]
    }
]);
