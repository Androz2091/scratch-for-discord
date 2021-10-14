import * as Blockly from "blockly/core";

const blockName = "s4d_http_get_then";

const blockData = {
    "message0": "%{BKY_HTTP_GET_THEN}",
    "args0": [
        {
          "type": "input_value",
          "name": "HTTPS",
          "check": [ "Number", "String" ]
        },
				{
          "type": "input_statement",
          "name": "THEN"
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
		const https = Blockly.JavaScript.valueToCode(block, "HTTPS", Blockly.JavaScript.ORDER_ATOMIC);
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `https.get(${https}, async resp => {\nlet data2 = "";\nresp.on("data",async chunk => {\ndata2 += chunk;\n});\nresp.on("end",async () => {\nlet data = JSON.parse(data2)\n ${statementThen} \n});\n})\n.on("error",async err => {\nconsole.log("Error: " + err.message);\n});\n`;
    return code;
};

