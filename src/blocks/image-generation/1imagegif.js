import * as Blockly from "blockly";
import '@blockly/field-grid-dropdown';

const blockName = "1imagegif";

const blockData = {
    "message0": "(gif) new triggered of image %1",
    "args0": [
        {
            "type": "input_value",
            "name": "IMAGE",
            "check": [ "Number", "String" ]
          },
    ],
    "output": "ImageBuffGif",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
}; 

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const image = Blockly.JavaScript.valueToCode(block, "IMAGE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`await new DIG.Triggered().getImage(${image})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

