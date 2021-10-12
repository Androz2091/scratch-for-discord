import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_request_then";

const blockData = {
    "message0": "%{BKY_REQUEST_THEN}",
    "args0": [
        {
            "type": "input_value",
            "name": "LINK",
            "check": "String"
        },
        {
            "type": "input_statement",
            "name": "CODE"
        }
    ],
    "colour": "#4C97FF",
    "inputsInline": false,
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

Blockly.JavaScript[blockName] = function(block){
    const link = Blockly.JavaScript.valueToCode(block, "LINK", Blockly.JavaScript.ORDER_ATOMIC);
    const code = Blockly.JavaScript.statementToCode(block, "CODE");
    return(`request(${link}, function(s4dcrap, s4dcrap, s4dbody) {\nvar s4dJsonParsed = JSON.parse(s4dbody)\n${code}\n})`)
}
    

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_LINK",
        types: [
          "LINK"
        ]
    }
]);
