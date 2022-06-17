import Blockly from "blockly/core";

const blockName = "jg_web_valueofkey";


const blockData = {
    "message0": "Value of key %1 in data file",
    "args0": [
        {
            "type": "input_value",
            "name": "key",
            "check": [ "String", "var", "Env"]
        }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "Get the value of a key in a JSON file.",
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
const code =  [`JSONdataS4D[String(${key})]`, Blockly.JavaScript.ORDER_NONE ];
return code;
}
