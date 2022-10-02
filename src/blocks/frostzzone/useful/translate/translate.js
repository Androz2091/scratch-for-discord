import Blockly from "blockly/core";

const blockName = "frost_translate";

const blockData = {
    "message0": "Translate %1 to %2 and save translation to variable %3",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY",
            "check": [ "String", "Number" ]
        },
        {
            "type": "field_dropdown",
            "name": "LANG",
            "options": [
              [
                "English",
                "en"
              ],
              [
                "Spanish",
                "es"
              ],
              [
                "French",
                "fr"
              ],
              [
                "Portuguese",
                "pt"
              ]
            ]
        },
      {
        "type": "input_value",
        "name": "VAR",
        "check": "Message"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#5ba58b",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const key = Blockly.JavaScript.valueToCode(block, "KEY", Blockly.JavaScript.ORDER_ATOMIC);
    const lang = Blockly.JavaScript.valueToCode(block, "LANG", Blockly.JavaScript.ORDER_ATOMIC);
    const vari = Blockly.JavaScript.valueToCode(block, "VAR", Blockly.JavaScript.ORDER_ATOMIC);
  
    const code = [`translate(${key}, {to: '${lang}'}).then(res => { ${vari}; }).catch(err => { console.error(err) })`, Blockly.JavaScript.ORDER_ATOMIC];
  return code;
};
