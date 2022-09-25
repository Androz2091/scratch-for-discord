import * as Blockly from "blockly/core";
import "@blockly/field-grid-dropdown";

const blockName = "s4d_set_transparency";

const blockData = {
    "message0": "%{BKY_SET_TRANSPARENCY}",
    "args0": [{"type": "field_grid_dropdown",
        "name": "TYPE",
        "options": [
          ["No-Badges", "No-Badges"], 
					["Reputation", "Reputation"], 
					["Background-Bar", "Background-Bar"],
					["Level", "Level"],
					["Badges", "Badges"],
					["Avatar-Background", "Avatar"]
        ]
			},
      {
        "type":"input_value",
        "name":"VALUE",
        "check":["String","Number"]
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
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
		const type = block.getFieldValue("TYPE");
return `.setOpacity("${type}",${value})`
};