import * as Blockly from "blockly";
import '@blockly/field-grid-dropdown';

const blockName = "1imagepng";

const blockData = {
    "message0": "(image) new %1 of image %2",
    "args0": [
        {
            "type": "field_grid_dropdown",
            "name": "INFO",
            "options": [
                [
                    "Blur",
                    "Blur"
                ],
                [
                    "Gay",
                    "Gay"
                ],
                [
                    "Greyscale",
                    "Greyscale"
                ],
                [
                    "Invert",
                    "Invert"
                ],
                [
                    "Sepia",
                    "Sepia"
                ],
                [
                    "Ad",
                    "Ad"
                ],
                [
                    "Affect",
                    "Affect"
                ],
                [
                    "Beautiful",
                    "Beautiful"
                ],
                [
                    "Bobross",
                    "Bobross"
                ],
                [
                    "ConfusedStonk",
                    "ConfusedStonk"
                ],
                [
                    "Delete",
                    "Delete"
                ],
                [
                    "DiscordBlack",
                    "DiscordBlack"
                ],
                [
                    "DiscordBlue",
                    "DiscordBlue"
                ],
                [
                    "Facepalm",
                    "Facepalm"
                ],
                [
                    "Hitler",
                    "Hitler"
                ],
                [
                    "Jail",
                    "Jail"
                ],
                [
                    "Karaba",
                    "Karaba"
                ],
                [
                    "Mms",
                    "Mms"
                ],
                [
                    "NotStonk",
                    "NotStonk"
                ],
                [
                    "Poutine",
                    "Poutine"
                ],
                [
                    "Rip",
                    "Rip"
                ],
                [
                    "Stonk",
                    "Stonk"
                ],
                [
                    "Tatoo",
                    "Tatoo"
                ],
                [
                    "Thomas",
                    "Thomas"
                ],
                [
                    "Trash",
                    "Trash"
                ],
                [
                    "Circle",
                    "Circle"
                ],
            ]
        },
        {
            "type": "input_value",
            "name": "IMAGE",
            "check": [ "Number", "String" ]
          },
    ],
    "output": "ImageBuffPng",
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
    const info2 = block.getFieldValue("INFO");
    let info1 = info2.replace("'",'')
    let info = info1.replace("'","")
    const code = [`await new DIG.${info}().getImage(${image})`, Blockly.JavaScript.ORDER_NONE];
    return code;
};

