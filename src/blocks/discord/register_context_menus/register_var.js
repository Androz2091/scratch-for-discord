/*name: "ban",
  description: "Ban selected member", */
  import * as Blockly from "blockly/core";


  const blockName = "register_var";
  
  const blockData = {
      "message0": "make slash command variable %1 %3 %2",
      "args0": [
        {
            "type": "input_value",
            "name": "VAR_NAME",
            "check": [ "String" ]
        },
          {
              "type": "input_statement",
              "name": "THEN"
          },
          {
              "type": "input_dummy"
          }
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
    
    const var_name = Blockly.JavaScript.valueToCode(block, "VAR_NAME", Blockly.JavaScript.ORDER_ATOMIC);
    let text1 = var_name.replace("'","")
    let var_name2 = text1.replace("'","")
      const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
      const code = `const ${var_name2} =  \n ${statementThen} \n `;
      return code;
  };
  
  