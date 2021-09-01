/*name: "ban",
  description: "Ban selected member", */
  import * as Blockly from "blockly/core";


  const blockName = "choices_c";
  
  const blockData = {
      "message0": "name %1 value %2",
      "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "VALUE",
            "check": [ "String" ]
        },
      ],
      "colour": "#40BF4A",
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": "",
      "helpUrl": ""
  };
  
  Blockly.Blocks[blockName] = {
      init: function() {
          this.jsonInit(blockData);
      }
  };
  
  Blockly.JavaScript[blockName] = function(block) {
    

    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_ATOMIC);
      const code = `{ \n name: ${name}, \n value: ${value}, \n }, \n`;
      return code;
  };
/*
 {
                name: 'Funny',
                value: 'gif_funny',
}, */