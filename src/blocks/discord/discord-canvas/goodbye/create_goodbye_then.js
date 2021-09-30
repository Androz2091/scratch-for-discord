import * as Blockly from "blockly/core";
const blockName = "s4d_create_goodbye_then";
const blockData = {
    "message0": "%{BKY_CREATE_GOODBYE_THEN}",
    "args0": [{
          "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        }
				
    ],
    "colour": "#4C97FF",
		"output":"Goodbye"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = [`await new canvas.Goodbye()${statementThen}.toAttachment()`, Blockly.JavaScript.ORDER_NONE];
    return code;
};