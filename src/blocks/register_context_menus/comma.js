/*name: "ban",
  description: "Ban selected member", */
  import * as Blockly from "blockly/core";


  const blockName = "comma";
  
  const blockData = {
      "message0": "comma",
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
  
  Blockly.JavaScript[blockName] = function() {
    

      const code = `,`;
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