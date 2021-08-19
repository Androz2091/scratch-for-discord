/*name: "ban",
  description: "Ban selected member", */
  import * as Blockly from "blockly/core";


  const blockName = "register_c_m";
  
  const blockData = {
      "message0": " register context menu with the name %1",
      "args0": [
        {
            "type": "input_value",
            "name": "NAME",
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
      const code = `{ \n name: ${name}, \n type: 3 \n } \n`;
      return code;
  };
  
  