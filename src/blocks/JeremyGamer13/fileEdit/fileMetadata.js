import Blockly from "blockly/core";

const blockName = "jg_file_metadata";


const blockData = {
    "message0": "Metadata of File %1",
    "args0": [
        {
            "type": "input_value",
            "name": "file",
            "check": [ "String", "var", "Env"]
        }
    ],
    "output": "String",
    "colour": 45,
    "tooltip": "Get the metadata of a file, like it's size in bytes and timestamp of it's creation.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const file = Blockly.JavaScript.valueToCode(block, "file", Blockly.JavaScript.ORDER_ATOMIC);
const code =  [`JSON.stringify(fs.statSync(` + file + `))`, Blockly.JavaScript.ORDER_NONE ];
return code;
}
