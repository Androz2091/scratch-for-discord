import * as Blockly from "blockly/core";
import "@blockly/field-grid-dropdown";

const blockName = "s4d_set_color";

const blockData = {
    "message0": "%{BKY_SET_COLOR}",
    "args0": [{"type": "field_grid_dropdown",
        "name": "TYPE",
        "options": [
          ["border", "border"], 
					["username-box", "username-box"], 
					["discriminator-box", "discriminator-box"], 
					["message-box", "message-box"], 
					["title-border", "title-border"], 
					["member-count", "member-count"],
					["title","title"],
					["title-border","title-border"],
					["avatar","avatar"],
					["username","username"],
					["hashtag","hashtag"],
					["discriminator","discriminator"],
					["message","message"],
					["background","background"]
        ]
			},
      {
        "type":"input_value",
        "name":"COLOR",
        "check":"Colour"
      },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
		"inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const color2 = Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC);
let color1 = color2.replace(`'`, "");
let color = color1.replace(`'`, "");
		const type = block.getFieldValue("TYPE");
			return `.setColor("${type}", "${color}")`
};