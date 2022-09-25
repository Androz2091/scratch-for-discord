import Blockly from "blockly/core";

const blockName = "jg_web_keywithvalue";

const blockData = {
    "message0": "Key with value %1 in data file",
    "args0": [
        {
            "type": "input_value",
            "name": "key",
            "check": null
        }
    ],
    "output": "String",
    "colour": 230,
    "tooltip": "Get the key with the value in a JSON file.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
// stuff    return `fs.readFileSync(` + fileName + `, 'utf8')`;
const key = Blockly.JavaScript.valueToCode(block, "key", Blockly.JavaScript.ORDER_ATOMIC);
const code =  [`Object.keys(JSONdataS4D)[Object.values(JSONdataS4D).indexOf(${key})]`, Blockly.JavaScript.ORDER_NONE ];
return code;
}
