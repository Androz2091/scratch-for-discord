import * as Blockly from "blockly/core";

const blockName = "jg_experiments_xml2json";

const blockData = {
    "message0": "Convert XML file %1 to JSON file named %2",
    "args0": [
      {
            "type": "input_value",
            "name": "CONTENT",
            "check": [ "String", "var", "Env" ]
        },
        {
              "type": "input_value",
              "name": "CONTENT2",
              "check": [ "Number", "String", "var", "Env" ]
          }
    ],
    "colour": 205,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Converts an XML file to a JSON file.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  const fileName1 = Blockly.JavaScript.valueToCode(block, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC);
  const fileName2 = Blockly.JavaScript.valueToCode(block, "CONTENT2", Blockly.JavaScript.ORDER_ATOMIC);
    return `xml2json({
        input: ${fileName1},
        output: ${fileName2}
    }, function(err, result) {
      
        if(err) {
            console.error(err);
        } else {
            console.log(result);
        }
      
    });
    `;
}