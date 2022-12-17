import * as Blockly from "blockly/core";
import "@blockly/field-grid-dropdown";

const blockName = "s4d_set_text";

const blockData = {
    "message0": "%{BKY_SET_TEXT}",
    "args0": [{"type": "field_grid_dropdown",
        "name": "TYPE",
        "options": [
          ["Needed-Xp", "Needed-Xp"], 
					["Reputation", "Reputation"], 
					["Level", "Level"]
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
return `.setText("${type}",${value})`
};