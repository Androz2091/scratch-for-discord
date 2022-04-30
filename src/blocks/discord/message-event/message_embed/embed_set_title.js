import * as Blockly from "blockly/core";

const blockName = "s4d_embed_set_title";

const blockData = {
    "message0": "set embed title %1 add url %2",
    "args0": [
      {
        "type": "input_value",
        "name": "TITLE",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "HYPERLINK",
        "check": "String"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#40BF4A",
    "tooltip": "Set the title of an embed.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const title = Blockly.JavaScript.valueToCode(block, "TITLE", Blockly.JavaScript.ORDER_ATOMIC);
    const hyperlink = Blockly.JavaScript.valueToCode(block, "HYPERLINK", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `embed.setTitle(${title}) \n embed.setURL(${hyperlink})`; 
    return code;
};
