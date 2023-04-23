import * as Blockly from "blockly/core";


const blockName = "frost_drop1";

const blockData = {
    "message0": "Image %1",
    "args0": [
       {
        "type": "field_dropdown",
        "name": "INFO",
        "options": [
          [{"src": "https://c.tenor.com/UVAk99QaOTsAAAAC/fart-experiment.gif", "width": 50, "height": 25, "alt": "Fart"}, "https://c.tenor.com/UVAk99QaOTsAAAAC/fart-experiment.gif"],
          [{"src": "https://c.tenor.com/VcR3cl_TNQsAAAAM/big-floppa-mad-floppa.gif", "width": 50, "height": 50, "alt": "Floppa"}, "https://c.tenor.com/VcR3cl_TNQsAAAAM/big-floppa-mad-floppa.gif"]
        ],
        },

    ],
    "colour": "#5ba58b",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const stats = block.getFieldValue("INFO");
  const code = [`${stats}`, Blockly.JavaScript.ORDER_NONE]

    return code;

};
