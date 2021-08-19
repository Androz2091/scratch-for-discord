/*name: "ban",
  description: "Ban selected member", */
  import * as Blockly from "blockly/core";


  const blockName = "choices_s";
  
  const blockData = {
      "message0": "make option with choices name %1 description %2 required %3 choices %4 %5",
      "args0": [
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "DESCRIPTION",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "BOOLEAN",
            "check": [ "Boolean" ]
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
    

    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const required = Blockly.JavaScript.valueToCode(block, "BOOLEAN", Blockly.JavaScript.ORDER_ATOMIC);
    const description = Blockly.JavaScript.valueToCode(block, "DESCRIPTION", Blockly.JavaScript.ORDER_ATOMIC);
      const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
      const code = `{ name: ${name}, \n type: 'STRING'\n description: ${description}, \n required: ${required}, \n choices: [ \n ${statementThen} \n ] },`;
      return code;
  };
  
  /*{
        name: 'category',
        type: 'STRING',
        description: 'The gif category',
        required: true,
        choices: [
            {
                name: 'Funny',
                value: 'gif_funny',
            },
            {
                name: 'Meme',
                value: 'gif_meme',
            },
            {
                name: 'Movie',
                value: 'gif_movie',
            },
        ],
    }], */