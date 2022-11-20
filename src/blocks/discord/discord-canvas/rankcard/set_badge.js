import '@blockly/field-slider';

import * as Blockly from "blockly/core";

const blockName = "s4d_set_badge";

const blockData = {
    "message0": "%{BKY_SET_BADGE}",
    "args0": [
      {
        "type": "field_grid_dropdown",
        "name": "TYPE",
        "options": [
          ["diamond", "diamond"], 
					["gold", "gold"], 
					["silver", "silver"], 
					["bronze", "bronze"], 
        ]
			},
      {
        "type": "field_slider",
        "name": "SLIDER",
        "max": 9,
        "min": 1,
        "value": 9
      }
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
<<<<<<< HEAD
    const number = Blockly.JavaScript.valueToCode(block, "SLIDER", Blockly.JavaScript.ORDER_ATOMIC) || blockData.args0[1].value;
=======
    const number = block.getFieldValue("SLIDER");
>>>>>>> 3dbfbfa6dea72e0c70b855a059b883304a4d75bf
		const type = block.getFieldValue("TYPE");
		return `.setBadge(${number}, "${type}")`
};