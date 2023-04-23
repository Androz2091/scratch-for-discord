import * as Blockly from "blockly/core";

const blockName = "gsa_http_get_buffer_then";

const blockData = {
    "message0": "buffer request https %1 then %2",
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
    const code = `https.get(${https}, async resp => {
    let data = Buffer.alloc(0);
    resp.on("data",async chunk => {
        data = Buffer.concat([data, chunk]);
    });
    resp.on("end",async () => {
        ${statementThen}
    });
})
`;
    return code;
};

Blockly.Blocks["gsa_get_https_response_buffer"] = {
  init: function () {
    this.jsonInit({
        "message0": "buffer",
        "output": 'buffer',
        "colour": '#AE4FA7',
        "tooltip": "returns the buffer data goten from an https buffer request",
        "helpUrl": ""
    });
  }
};

Blockly.JavaScript["gsa_get_https_response_buffer"] = function() {
  return [`data`, Blockly.JavaScript.ORDER_ATOMIC]
};

