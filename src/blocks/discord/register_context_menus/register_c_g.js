/*name: "ban",
  description: "Ban selected member", */
  import * as Blockly from "blockly/core";


  const blockName = "guild_s";
  
  const blockData = {
      "message0": " name %3 register slash commands in server %1 slash command variable name %2",
      "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "NAME_VAR",
            "check": [ "String" ]
        },
      ],
      "colour": "#0339fc",
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
    

    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
      const var_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
      let text1 = var_name.replace("'","")
      let var_name2 = text1.replace("'","")
      const name_var = Blockly.JavaScript.valueToCode(block, "NAME_VAR", Blockly.JavaScript.ORDER_ATOMIC);
      let text2 = name_var.replace("'","")
      let var_name3 = text2.replace("'","")
      const code = `const ${var_name3} = await s4d.client.guilds.cache.get(${server})?.commands.create(${var_name2});`;
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