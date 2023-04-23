import Blockly from "blockly/core";

const blockName = "jg_file_contents";

const blockData = {
    "message0": "Contents of File %1",
    "args0": [
        {
            "type": "input_value",
            "name": "fileName",
            "check": [ "String", "var", "Env"]
        }
    ],
    "output": "String",
    "colour": 45,
    "tooltip": "Get the contents of a file with the matching file name and extension.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
// stuff    return `fs.readFileSync(` + fileName + `, 'utf8')`;
const fileName = Blockly.JavaScript.valueToCode(block, "fileName", Blockly.JavaScript.ORDER_ATOMIC);
const code =  [`fs.readFileSync(` + fileName + `, 'utf8')`, Blockly.JavaScript.ORDER_NONE ];
return code;
}
