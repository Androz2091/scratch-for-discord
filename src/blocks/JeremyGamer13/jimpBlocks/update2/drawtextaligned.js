import Blockly from "blockly/core";
import { registerRestrictions } from "../../../../restrictions";

const blockName = "jg_jimp_U2_drawtext";

const blockData = {
    "message0": "Display %1 placed X: %2 Y: %3 using font size %4 %5 and %6 using font color %7",
    "args0": [
        {
            "type": "input_value",
            "name": "text",
            "check": [ "String", "Number", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "xpos",
            "check": [ "Number", "var", "Env"]
        },
        {
            "type": "input_value",
            "name": "ypos",
            "check": [ "Number", "var", "Env"]
        },
        {
            "type": "field_dropdown",
            "name": "fontSize",
            "options": [
              [
                "8",
                '8'
              ],
              [
                "10",
                '10'
              ],
              [
                "12",
                '12'
              ],
              [
                "14",
                '14'
              ],
              [
                "16",
                '16'
              ],
              [
                "32",
                '32'
              ],
              [
                "64",
                '64'
              ],
              [
                "128",
                '128'
              ]
            ],
        },
        {
            "type": "field_dropdown",
            "name": "alignx",
            "options": [
              [
                "Align to Left",
                'jimp.HORIZONTAL_ALIGN_LEFT'
              ],
              [
                "Align to Center",
                'jimp.HORIZONTAL_ALIGN_CENTER'
              ],
              [
                "Align to Right",
                'jimp.HORIZONTAL_ALIGN_RIGHT'
              ]
            ],
        },
        {
            "type": "field_dropdown",
            "name": "aligny",
            "options": [
              [
                "Align to Top",
                'jimp.VERTICAL_ALIGN_TOP'
              ],
              [
                "Align to Middle",
                'jimp.VERTICAL_ALIGN_MIDDLE'
              ],
              [
                "Align to Bottom",
                'jimp.VERTICAL_ALIGN_BOTTOM'
              ]
            ],
        },
        {
            "type": "field_dropdown",
            "name": "color",
            "options": [
              [
                "Black",
                'BLACK'
              ],
              [
                "White",
                'WHITE'
              ]
            ],
        }
    ],
    "colour": 260,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Adds text onto to the image at a certain point with the specified parameters.",
    "helpUrl": "https://www.npmjs.com/package/jimp#writing-text"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const text = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_NONE);
  const xpos = Blockly.JavaScript.valueToCode(block, "xpos", Blockly.JavaScript.ORDER_ATOMIC);
  const ypos = Blockly.JavaScript.valueToCode(block, "ypos", Blockly.JavaScript.ORDER_ATOMIC);
  const fontSize = block.getFieldValue("fontSize");
  const alignx = block.getFieldValue("alignx");
  const aligny = block.getFieldValue("aligny");
  const color = block.getFieldValue("color");
    return `await jimp.loadFont(jimp.FONT_SANS_${fontSize}_${color}).then(async font => {
  await image.print(
      font,
      Number(${xpos}),
      Number(${ypos}),
      {
        text: String(${text}),
        alignmentX: ${alignx},
        alignmentY: ${aligny}
      },
      
      );
});\n`;
}

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_CONTENT_GEN",
        types: [
          "text",
          "xpos",
          "ypos",
          "fontSize"
        ]
    },
    {
        type: "hasparent",
        message: "RES_JGSAVEIMAGE",
        types: [
            "jg_beginJimp"
        ]
    }
]);
