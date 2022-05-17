import Blockly from "blockly/core";


const blockName = "jg_web_currentdata";

const blockData = {
    "message0": "Set current data file to %1",
    "args0": [
        {
        "type": "input_value", 
        "name": "datafile",
        "check": ["String","var", "Env", "Number"]
        }
    ],
    "colour": 230,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Use this before a \"Value of key () in data file\" block. This sets the current data file it will read from.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const datafile = Blockly.JavaScript.valueToCode(block, "datafile", Blockly.JavaScript.ORDER_ATOMIC);
  const code = `var JSONdataS4D = JSON.parse(fs.readFileSync(${datafile}));\n`;
  return code
}
