import * as Blockly from "blockly/core";
import "@blockly/field-grid-dropdown";

const blockName = "s4d_set_color_r";

const blockData = {
    "message0": "%{BKY_SET_COLOR}",
    "args0": [{"type": "field_grid_dropdown",
        "name": "TYPE",
        "options": [
          ["Bar", "Bar"], 
					["Badges-Box", "Badges-Box"], 
					["No-Badges", "No-Badges"], 
					["Needed-Xp", "Needed-Xp"], 
					["Background-Bar", "Background-Bar"], 
					["Reputation", "Reputation"], 
					["Username", "Username"], 
					["Rank-Name", "Rank-Name"], 
					["Rank", "Rank"], 
					["Level", "Level"], 
					["Reputation-Box", "Reputation-Box"], 
					["Level-Box", "Level-Box"], 
					["Background", "Background"], 
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
    const color = Blockly.JavaScript.valueToCode(block, "COLOR", Blockly.JavaScript.ORDER_ATOMIC);
		const type = block.getFieldValue("TYPE");
return `.setColor("${type}",${color})`
};