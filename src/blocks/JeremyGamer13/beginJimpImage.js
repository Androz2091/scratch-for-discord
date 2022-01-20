import Blockly from "blockly/core";

const blockName = "jg_beginJimpIMG";

const blockData = {
    "message0": "Begin image edits on File %2 using effects %3 %1",
    "args0": [
        {
            "type": "input_statement",
            "name": "beginJimp"
        },
        {
        "type": "input_value", 
        "name": "JimpURL",
        "check": ["String","var"]
        },
        {
            "type": "input_dummy"
        }
        
    ],
    "colour": "#DB0000",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Place this before placing any other Jimp editing block. This block only grabs files.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const JimpIMG = Blockly.JavaScript.valueToCode(block, "JimpURL", Blockly.JavaScript.ORDER_ATOMIC);
    const JimpCode = Blockly.JavaScript.statementToCode(block, "beginJimp");
    const code = `jimp.read(` + JimpIMG + `, (err, image) => {
      if (err) throw err;
      ${JimpCode}
      });`;
    return code;
};